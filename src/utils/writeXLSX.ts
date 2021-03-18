import { WorkBook, write, writeFile } from 'xlsx';

export const writeXLSX = (workBook: WorkBook) => {
  writeFile(workBook, 'example.xlsx');
}