import { ChangeEvent, FormEventHandler, useReducer } from 'react';

import { utils, writeFile } from 'xlsx';
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
  uploadTemplate,
  uploadTemplateFail,
  uploadTemplateSuccess} from '../state/actions';

import { initialState, objectReducer } from '../state/reducer';

import { DiffFile } from '../types/diffFile';
import { OrigFile } from '../types/origFile';
import { TemplateItem } from '../types/templateFile';
import { getSheetByIndex } from '../utils/getSheetByIndex';
import { getSheetNameByIndex } from '../utils/getSheetNameByIndex';

import { readXLSX } from '../utils/readXLSX';


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
    isTemplateLoading,
    templateFileName,
    templateLoaded } = state;

  const onOrigChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(setDownloadDisabled(true));
      dispatch(setWrongFileFormat(false));
      dispatch(setOrigText(e.target.files[0].name));
      const file = e.target.files[0]
      dispatch(setOrigLoading(true));
      try {
        const [data, workBook] = await readXLSX<OrigFile>(file);
        dispatch(setOrigData(data));
        dispatch(setWorkBook(workBook));

        const map = data.reduce<{ [key: string]: number }>((acc, item, index) => {
          item.model && item.model.trim() && Object.assign(acc, { [item.model.trim()]: index });
          return acc;
        }, {});

      console.log(data);
      

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
      dispatch(uploadTemplate(undefined))
      const file = e.target.files[0];
      const fileName = e.target.files[0].name;
      try {
        const [[data], workBook] = await readXLSX<TemplateItem>(file, 1);
        console.log(data, workBook);
        dispatch(uploadTemplateSuccess({data, fileName, workBook}))

      } catch (error) {
        console.log(error);
        dispatch(uploadTemplateFail(undefined))
      }
    }
  };

  const onDiffChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(setDownloadDisabled(true));
      dispatch(setDiffText(e.target.files[0].name));
      const file = e.target.files[0]
      dispatch(setDiffLoading(true));
      try {
        const [data] = await readXLSX<DiffFile>(file);
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
    const {newData, templateDate} = diffData.reduce((acc, item) => {
      const model = item[DIFF_MODEL_KEY];
      const quantity = item[DIFF_QUANTITY_KEY];
      if (typeof model === "string" && model.trim()
        && typeof quantity === "number"
        && map[model.trim()] !== undefined) {
          const {newData} = acc
          newData[map[model.trim()]].quantity = quantity;
      }
      return acc
    },{ newData: [...origData], templateDate: {}});
    dispatch(setOrigData(newData));
    if (workBook !== null) {
      const index = 0
      const newWorkBook = {...workBook}
      const sheetName = getSheetNameByIndex(workBook, index);
      const sheet = {...getSheetByIndex(workBook, index)};
      utils.sheet_add_json(sheet, origData);
      utils.book_append_sheet(newWorkBook, sheet,  sheetName);
      dispatch(setWorkBook(newWorkBook));
    };
    dispatch(setDownloadDisabled(false));
  }

  const onSaveFileClick = () => {
    workBook && writeFile(workBook, `new_${origText}`);
    // workBook && writeFile(workBook, `ozone_${origText}`);
    dispatch(resetApp(undefined));
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = e => e.preventDefault();

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
    onTemplateUpload,
    isTemplateLoading,
    templateFileName,
    templateLoaded,
  };
};
