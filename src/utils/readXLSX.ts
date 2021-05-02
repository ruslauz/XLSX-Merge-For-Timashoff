import { read, utils, WorkBook } from 'xlsx';

export const readXLSX = <T>(file: File, sheetIndex = 0): Promise<[Array<T>, WorkBook]> => {
  return new Promise((res, rej) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = () =>
      {
        const bufferArray = fileReader.result;
        const workBook = read(bufferArray, { type: "buffer" });
        const sheet = workBook.Sheets[workBook.SheetNames[sheetIndex]];
        const data:Array<T> = utils.sheet_to_json(sheet, {
          defval: ''
        });
        res([data, workBook]);
      };
    fileReader.onerror = () =>
      {
        console.log('error', fileReader.error);
        rej(fileReader.error);
      }
  })
}
