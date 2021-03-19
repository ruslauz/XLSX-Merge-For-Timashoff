import { ChangeEvent, FormEventHandler, useReducer } from 'react';

import { utils, writeFile } from 'xlsx';
import { DIFF_MODEL_KEY, DIFF_QUANTITY_KEY } from '../app/App';

import { resetApp,
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
  setWrongFileFormat } from '../state/actions';

import { initialState, reducer } from '../state/reducer';

import { DiffFile } from '../types/diffFile';
import { OrigFile } from '../types/origFile';

import { readXLSX } from '../utils/readXLSX';


export const useApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
    downloadIsDisabled, } = state;

  const onOrigChange = async (e: ChangeEvent<HTMLInputElement>) =>
  {
    if (e.target.files?.length) {
      setOrigValue(e.target.value);
      dispatch(setDownloadDisabled(true));
      dispatch(setWrongFileFormat(false));
      dispatch(setOrigText(e.target.files[0].name));
      const file = e.target.files[0]
      dispatch(setOrigLoading(true));
      try {
        const [data, workBook] = await readXLSX<OrigFile>(file);
        dispatch(setOrigData(data));
        dispatch(setWorkBook(workBook));

        const map = data.reduce<{ [key: string]: number }>((acc, item, index) =>
        {
          item.model && item.model.trim() && Object.assign(acc, { [item.model.trim()]: index });
          return acc;
        }, {});

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

  const onDiffChange = async (e: ChangeEvent<HTMLInputElement>) =>
  {
    if (e.target.files?.length) {
      dispatch(setDiffValue(e.target.value));
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

  const onProcessClick = () =>
  {
    const newData = diffData.reduce((acc, item) =>
    {
      const model = item[DIFF_MODEL_KEY];
      const quantity = item[DIFF_QUANTITY_KEY];
      if (typeof model === "string" && model.trim()
        && typeof quantity === "number"
        && map[model.trim()] !== undefined) {
        acc[map[model.trim()]].quantity = quantity;
      }
      return acc
    }, [...origData]);
    dispatch(setOrigData(newData));
    if (workBook !== null) {
      utils.sheet_add_json(workBook.Sheets[workBook.SheetNames[0]], origData)
    };
    dispatch(setDownloadDisabled(false));
  }

  const onSaveFileClick = () =>
  {
    workBook && writeFile(workBook, `new_${origText}`);
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
  };
};
