import { WorkBook, writeFile } from 'xlsx';

export const writeXLSX = (workBook: WorkBook,  fileName: string) => {
  writeFile(workBook, `new_${fileName}`, {compression: true})
}