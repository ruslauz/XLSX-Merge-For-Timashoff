import { WorkBook } from 'xlsx/types';

import { OrigFile } from '../types/origFile';
import { TemplateItem } from '../types/templateFile';

import { Types } from './actions';

export type Action<T> = (payload?: T) => ({ type: string, payload?: T });

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
  diffData: Array<{ [key: string]: unknown }>
  downloadIsDisabled: boolean
  logValue: Array<string>
  modalOpened: boolean
  isTemplateLoading: boolean,
  templateLoaded: boolean,
  templateFileName: string,
  templateData: TemplateItem[],
  templateWorkBook: WorkBook | null,

}

export const initialState: Store = {
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
  isTemplateLoading: false,
  templateLoaded: false,
  templateFileName: '',
  templateData: [],
  templateWorkBook: null,
  logValue: [],
  modalOpened: false,
};

export const objectReducer = (state: Store = initialState, action: ReturnType<Action<any>>): Store => {
  return {
    [Types.SET_ORIG_TEXT]: {...state, origText: action.payload},
    [Types.SET_ORIG_VALUE]: {...state, origValue: action.payload},
    [Types.SET_ORIG_LOADING]: {...state, isOrigLoading: action.payload},
    [Types.SET_ORIG_LOADED]: {...state, origLoaded: action.payload},
    [Types.SET_ORIG_DATA]: {...state, origData: action.payload},
    [Types.SET_WORKBOOK]: {...state, workBook: action.payload},
    [Types.SET_MAP]: {...state, map: action.payload},
    [Types.SET_WRONG_FILE_FORMAT]: {...state, wrongFileFormat: action.payload},

    [Types.SET_DIFF_TEXT]: {...state, diffText: action.payload},
    [Types.SET_DIFF_VALUE]: {...state, diffValue: action.payload},
    [Types.SET_DIFF_LOADING]: {...state, isDiffLoading: action.payload},
    [Types.SET_DIFF_LOADED]: {...state, diffLoaded: action.payload},
    [Types.SET_DIFF_DATA]: {...state, diffData: action.payload},

    [Types.SET_DOWNLOAD_DISABLED]: {...state, downloadIsDisabled: action.payload},
    [Types.SET_LOG_VALUE]: {...state, logValue: state.logValue.concat(action.payload)},
    [Types.CLEAR_LOG]: {...state, logValue: []} ,

    [Types.SET_MODAL_OPENED]: {...state, modalOpened: action.payload} ,
    
    [Types.UPLOAD_TEMPLATE]: {...state, downloadIsDisabled: false, isTemplateLoading: true},
    [Types.UPLOAD_TEMPLATE_SUCCESS]: {
      ...state,
      isTemplateLoading: false,
      templateFileName: action.payload?.fileName,
      templateWorkBook: action.payload?.workBook,
      templateLoaded: true},
    [Types.UPLOAD_TEMPLATE_FAIL]: {...state, isTemplateLoading: false, templateLoaded: false},
    [Types.SAVE_TEMPLATE_WORKBOOK]: {...state, templateWorkBook: action.payload},
    
    [Types.RESET_APP]: {...state, ...initialState} ,
  }[action.type] || state;
}


