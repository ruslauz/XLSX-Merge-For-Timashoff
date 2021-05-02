import { Action } from './reducer';
import { WorkBook } from 'xlsx/types';
import { OrigFile } from './../types/origFile';
import { TemplateItem } from '../types/templateFile';

export enum Types {
  SET_ORIG_TEXT = 'SET_ORIG_TEXT',
  SET_ORIG_VALUE = 'SET_ORIG_VALUE',
  SET_ORIG_LOADING = 'SET_ORIG_LOADING',
  SET_ORIG_LOADED = 'SET_ORIG_LOADED',
  SET_ORIG_DATA = 'SET_ORIG_DATA',
  SET_WORKBOOK = 'SET_WORKBOOK',

  SET_MAP = 'SET_MAP',
  SET_WRONG_FILE_FORMAT = 'SET_WRONG_FILE_FORMAT',
  SET_DIFF_TEXT = 'SET_DIFF_TEXT',
  SET_DIFF_VALUE = 'SET_DIFF_VALUE',
  SET_DIFF_LOADING = 'SET_DIFF_LOADING',
  SET_DIFF_LOADED = 'SET_DIFF_LOADED',
  SET_DIFF_DATA = 'SET_DIFF_DATA',

  SET_DOWNLOAD_DISABLED = 'SET_DOWNLOAD_DISABLED',

  SET_LOG_VALUE = 'SET_LOG_VALUE',
  CLEAR_LOG = 'CLEAR_LOG',

  SET_MODAL_OPENED = 'SET_MODAL_OPENED',

  RESET_APP = 'RESET_APP',

  UPLOAD_TEMPLATE = 'UPLOAD_TEMPLATE',
  UPLOAD_TEMPLATE_SUCCESS = 'UPLOAD_TEMPLATE_SUCCESS',
  UPLOAD_TEMPLATE_FAIL = 'UPLOAD_TEMPLATE_FAIL',
  SAVE_TEMPLATE_DATA = 'SAVE_TEMPLATE_DATA',
} 

export const setOrigText: Action<string> = text => ({
  type: Types.SET_ORIG_TEXT,
  payload: text
});

export const setOrigValue: Action<string> = text => ({
  type: Types.SET_ORIG_VALUE,
  payload: text
});

export const setOrigLoading: Action<boolean> = boolean => ({
  type: Types.SET_ORIG_LOADING,
  payload: boolean
});

export const setOrigLoaded: Action<boolean> = boolean => ({
  type: Types.SET_ORIG_LOADED,
  payload: boolean,
});

export const setOrigData: Action<Array<OrigFile>> = array => ({
  type: Types.SET_ORIG_DATA,
  payload: array
});

export const setWorkBook: Action<WorkBook> = workbook => ({
  type: Types.SET_WORKBOOK,
  payload: workbook
});

export const setMap:Action<{ [key: string]: number }> = map => ({
  type: Types.SET_MAP,
  payload: map
});

export const setWrongFileFormat: Action<boolean> = boolean => ({
  type: Types.SET_WRONG_FILE_FORMAT,
  payload: boolean,
});

export const setDiffText: Action<string> = text => ({
  type: Types.SET_DIFF_TEXT,
  payload: text
});

export const setDiffValue: Action<string> = text => ({
  type: Types.SET_DIFF_VALUE,
  payload: text
});

export const setDiffLoading: Action<boolean> = boolean => ({
  type: Types.SET_DIFF_LOADING,
  payload: boolean,
});

export const setDiffLoaded: Action<boolean> = boolean => ({
  type: Types.SET_DIFF_LOADED,
  payload: boolean,
});

export const setDiffData: Action<Array<{[key: string]: unknown}>> = array => ({
  type: Types.SET_DIFF_DATA,
  payload: array
});

export const setDownloadDisabled: Action<boolean> = boolean => ({
  type: Types.SET_DOWNLOAD_DISABLED,
  payload: boolean,
});

export const setLogValue: Action<string> = value => ({
  type: Types.SET_LOG_VALUE,
  payload: value,
});

export const setModalOpened: Action<boolean> = boolean => ({
  type: Types.SET_MODAL_OPENED,
  payload: boolean,
});

export const clearLogs: Action<undefined> = () => ({
  type: Types.CLEAR_LOG,
});

export const resetApp: Action<undefined> = () => ({
  type: Types.RESET_APP,
});

export const uploadTemplate: Action<undefined> = () => ({
  type: 'UPLOAD_TEMPLATE',
  payload: undefined,
})

export const uploadTemplateSuccess: Action<{[key: string]: any}> = (payload) => ({
  type: Types.UPLOAD_TEMPLATE_SUCCESS,
  payload,
})

export const uploadTemplateFail: Action<undefined> = () => ({
  type: Types.UPLOAD_TEMPLATE_FAIL,
  payload: undefined,
})

export const saveTemplateData: Action<TemplateItem[]> = (templateData) => ({
  type: Types.SAVE_TEMPLATE_DATA,
  payload: templateData,
})