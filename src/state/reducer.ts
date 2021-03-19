import { WorkBook } from 'xlsx/types';
import { DiffFile } from '../types/diffFile';
import { OrigFile } from '../types/origFile';
import { Types } from './actions';

export type Action<T> = (payload: T) => ({ type: string, payload: T });
export type Store = {
  origText: string
  origValue: string
  isOrigLoading: boolean
  origLoaded: boolean
  origData: Array<OrigFile>
  workBook: WorkBook | null
  map: { [key: string]: number }
  wrongFileFormat: boolean
  diffText: string
  diffValue: string
  isDiffLoading: boolean
  diffLoaded: boolean
  diffData: Array<DiffFile>
  downloadIsDisabled: boolean
}

export const reducer = (state: Store = initialState, action: ReturnType<Action<any>>): Store  => {
  switch (action.type) {
    case Types.SET_ORIG_TEXT:
      return {...state, origText: action.payload};
    case Types.SET_ORIG_VALUE:
      return {...state, origValue: action.payload};
    case Types.SET_ORIG_LOADING:
      return {...state, isOrigLoading: action.payload};
    case Types.SET_ORIG_LOADED:
      return {...state, origLoaded: action.payload};
    case Types.SET_ORIG_DATA:
      return {...state, origData: action.payload};
    case Types.SET_WORKBOOK:
      return {...state, workBook: action.payload};
    case Types.SET_MAP:
      return {...state, map: action.payload};
    case Types.SET_WRONG_FILE_FORMAT:
      return {...state, wrongFileFormat: action.payload};
    case Types.SET_DIFF_TEXT:
      return {...state, diffText: action.payload};
    case Types.SET_DIFF_VALUE:
      return {...state, diffValue: action.payload};
    case Types.SET_DIFF_LOADING:
      return {...state, isDiffLoading: action.payload};
    case Types.SET_DIFF_LOADED:
      return {...state, diffLoaded: action.payload};
    case Types.SET_DIFF_DATA:
      return {...state, diffData: action.payload};
    case Types.SET_DOWNLOAD_DISABLED:
      return {...state, downloadIsDisabled: action.payload};
    case Types.RESET_APP:
      return {...state, ...initialState};
    default:
      return state;
  }
}

export const initialState = {
  origText: '',
  origValue: '',
  isOrigLoading: false,
  origLoaded: false,
  origData: [],
  workBook: null,
  map: {},
  wrongFileFormat: false,
  diffText: '',
  diffValue: '',
  isDiffLoading: false,
  diffLoaded: false,
  diffData: [],
  downloadIsDisabled: true,
};
