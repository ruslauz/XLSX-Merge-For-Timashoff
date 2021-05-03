import { TEMPLATE_ITEM } from './../constants/index';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FormEventHandler, useReducer } from 'react';
import { utils, writeFile } from 'xlsx';
import { pluralize } from 'numeralize-ru';

import { DIFF_MODEL_KEY, DIFF_QUANTITY_KEY } from '../app/App';

import { 
  resetApp,
  setDiffData,
  setDiffLoaded,
  setDiffLoading,
  setDiffText,
  setDiffValue,
  setDownloadDisabled,
  setMap,
  setOrigData,
  setOrigLoaded,
  setOrigLoading,
  setOrigText,
  setOrigValue,
  setWorkBook,
  setWrongFileFormat,
  setLogValue,
  clearLogs,
  setModalOpened,
  uploadTemplate,
  uploadTemplateSuccess,
  uploadTemplateFail,
  saveTemplateWorkBook,
  } from '../state/actions';

import { initialState, objectReducer } from '../state/reducer';

import { OrigFile } from '../types/origFile';
import { TemplateItem } from '../types/templateFile';
import { getSheetByIndex } from '../utils/getSheetByIndex';
import { getSheetNameByIndex } from '../utils/getSheetNameByIndex';

import { readXLSX } from '../utils/readXLSX';
import { writeXLSX } from '../utils/writeXLSX';

export const useApp = () => {
  const [state, dispatch] = useReducer(objectReducer, initialState);
  const {
    origText,
    origValue,
    isOrigLoading,
    origLoaded,
    origData,
    workBook,
    map,
    wrongFileFormat,
    diffText,
    diffValue,
    isDiffLoading,
    diffLoaded,
    diffData,
    downloadIsDisabled,
    logValue,
    modalOpened,
    isTemplateLoading,
    templateFileName,
    templateLoaded,
    templateWorkBook,
  } = state;

  const onOrigChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      setOrigValue(e.target.value);
      dispatch(setDownloadDisabled(true));
      dispatch(setWrongFileFormat(false));
      dispatch(setOrigText(e.target.files[0].name));
      dispatch(setOrigLoading(true));

      const loadStart = Date.now();
      dispatch(setLogValue(`Загрузка ${e.target.files[0].name}`));
      try {
        const [data, workBook] = await readXLSX<OrigFile>(file, { defval: '', header: 'A', range: 1 });
        const loadFinish = Date.now();
        dispatch(setLogValue(`Загрузка завершена за ${loadFinish - loadStart} мс`));
        console.log(data);
        dispatch(setOrigData(data));
        dispatch(setWorkBook(workBook));

        const map = data.reduce<{ [key: string]: number }>((acc, item, index) => {
          item.D && item.D.trim() && Object.assign(acc, { [item.D.trim()]: index });
          return acc;
        }, {});
        console.log(map);
        console.log(data.length - Object.keys(map).length);
        
        if (Object.keys(map).length) {
          dispatch(setMap(map));
          dispatch(setOrigLoaded(true));
        } else {
          dispatch(setWrongFileFormat(true));
          dispatch(setOrigLoaded(false));
        };
      } catch (error) {
        console.log(error);
        dispatch(setOrigLoaded(false));
      } finally {
        dispatch(setOrigLoading(false));
      }
    } else {
      dispatch(setOrigText(''));
      dispatch(setOrigValue(''));
      dispatch(setOrigLoaded(false));
    }
  };

  const onTemplateUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(uploadTemplate())
      const file = e.target.files[0];
      const fileName = e.target.files[0].name;
      try {
        const [, workBook] = await readXLSX<TemplateItem>(file);
        console.log(workBook);
        dispatch(uploadTemplateSuccess({fileName, workBook}))

      } catch (error) {
        console.log(error);
        dispatch(uploadTemplateFail())
      }
    }
  };

  const onDiffChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(setDownloadDisabled(true));
      dispatch(setDiffText(e.target.files[0].name));
      const file = e.target.files[0]
      dispatch(setDiffLoading(true));
      const loadStart = Date.now();
      dispatch(setLogValue(`Загрузка ${e.target.files[0].name}`));

      try {
        const [data] = await readXLSX<{[key: string]: unknown}>(file, {header: 'A'});
        const loadFinish = Date.now();
        console.log(data);

        dispatch(setLogValue(`Загрузка завершена за ${loadFinish - loadStart} мс`));
        dispatch(setDiffData(data));
        dispatch(setDiffLoaded(true));
      } catch (error) {
        console.log(error);
        dispatch(setDiffLoaded(false));
      } finally {
        dispatch(setDiffLoading(false));
      }
    } else {
      dispatch(setDiffText(''));
      dispatch(setDiffValue(''));
      dispatch(setDiffLoaded(false));
    }
  };

  const onProcessClick = () => {
    let changedQuantityCounter = 0;
    const positions = pluralize(changedQuantityCounter, 'позиция', 'позиции', 'позиций');
    const origDataZeroRemaining = origData.map(item =>  ({...item, K: 0}))
    const {newData, templateData} = diffData.reduce<{newData: OrigFile[], templateData: TemplateItem[]}>((acc, item) => {
      const value = item[DIFF_MODEL_KEY];
      const quantity = item[DIFF_QUANTITY_KEY];
        if (typeof value === "string" && typeof quantity === "number") {
          const match = value.match(/\[(\d+)\]/);
          if (match !== null && match[1].length && map[match[1]] !== undefined) {
            const {newData, templateData} = acc;
            const templateDataItem: TemplateItem  = {...TEMPLATE_ITEM, Артикул: match[1], Количество: quantity}
            changedQuantityCounter++;
            newData[map[match[1]]].K = quantity;
            templateData.push(templateDataItem);
          } 
        };
      return acc
    }, {newData: origDataZeroRemaining, templateData: []});

    console.log(templateData);
    
    
    if (workBook !== null) {
      const index = 0
      const newWorkBook = {...workBook}
      const sheetName = getSheetNameByIndex(workBook, index);
      const sheet = {...getSheetByIndex(workBook, index)};
      utils.sheet_add_json(sheet, newData, {skipHeader: true, origin: 'A2'});
      newWorkBook.Sheets[sheetName] = sheet;
      dispatch(setWorkBook(newWorkBook));
    };
    
    if (templateWorkBook !== null) {
      const index = 1
      const newWorkBook = {...templateWorkBook}
      const sheetName = getSheetNameByIndex(newWorkBook, index);
      const sheet = {...getSheetByIndex(newWorkBook, index)};
      utils.sheet_add_json(sheet, templateData);
      newWorkBook.Sheets[sheetName] = sheet;
      dispatch(saveTemplateWorkBook(newWorkBook));
    };

    dispatch(setLogValue(`Было найдено и заменено ${changedQuantityCounter} ${positions}`));
    dispatch(setOrigData(newData));
    dispatch(setDownloadDisabled(false));
  }

  const onSaveFileClick = () => {
    // workBook && writeFile(workBook, `new_${origText}`, {compression: true});
    workBook && writeXLSX(workBook, origText);
    templateWorkBook && writeXLSX(templateWorkBook, templateFileName);
    dispatch(resetApp());
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = e => e.preventDefault();
  const onLogErase = () => dispatch(clearLogs());
  const onModalOpen = () => dispatch(setModalOpened(true));
  const onModalClose = () => dispatch(setModalOpened(false));

  return {
    onSubmit,
    origValue,
    onOrigChange,
    isOrigLoading,
    origLoaded,
    origText,
    wrongFileFormat,
    diffValue,
    diffText,
    onDiffChange,
    isDiffLoading,
    diffLoaded,
    onProcessClick,
    onSaveFileClick,
    downloadIsDisabled,
    logValue,
    onLogErase,
    onModalOpen,
    onModalClose,
    modalOpened,
    onTemplateUpload,
    isTemplateLoading,
    templateFileName,
    templateLoaded,
  };
};
