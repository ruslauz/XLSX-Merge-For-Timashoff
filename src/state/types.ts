import { TemplateItem } from "../types/templateFile";
import { Types } from "./actions"

export interface UploadTemplate {
  type: Types.UPLOAD_TEMPLATE,
}

export interface UploadTemplateSuccess {
  type: Types.UPLOAD_TEMPLATE_SUCCESS,
  payload: {[key: string]: any},
}

export interface UploadTemplateFail {
  type: Types.UPLOAD_TEMPLATE_FAIL,
}

export interface SaveTemplateData{
  type: Types.SAVE_TEMPLATE_DATA,
  payload: TemplateItem[],
}