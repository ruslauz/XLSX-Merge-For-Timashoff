import { WorkBook, writeFile } from 'xlsx';

export const writeXLSX = (workBook: WorkBook) => {
  writeFile(workBook, 'example.xlsx');
}