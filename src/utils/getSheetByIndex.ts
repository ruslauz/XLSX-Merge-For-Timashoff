import { Sheet, WorkBook } from 'xlsx/types';
import { getSheetNameByIndex } from './getSheetNameByIndex';

export const getSheetByIndex = (workBook: WorkBook, index: number): Sheet => {
  return workBook.Sheets[getSheetNameByIndex(workBook, index)];
}