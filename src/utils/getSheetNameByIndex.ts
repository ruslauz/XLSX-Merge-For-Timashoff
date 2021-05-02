import { WorkBook } from "xlsx/types";

export const getSheetNameByIndex = (workBook: WorkBook, index: number): string => {
  return workBook.SheetNames[index]
}