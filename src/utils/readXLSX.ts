import { read, utils, WorkBook } from 'xlsx';

export const readXLSX = <T>(file: File): Promise<[Array<T>, WorkBook]> => {
  return new Promise((res, rej) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = () =>
      {
        const bufferArray = fileReader.result;
        const workBook = read(bufferArray, { type: "buffer" });
        const sheet = workBook.Sheets[workBook.SheetNames[0]];
        const data:Array<any> = utils.sheet_to_json(sheet);
        res([data, workBook]);
      };
    fileReader.onerror = () =>
      {
        console.log('error', fileReader.error);
        rej(fileReader.error);
      }
  })
}
