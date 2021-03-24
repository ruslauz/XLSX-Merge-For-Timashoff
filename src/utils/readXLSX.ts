import { read, utils, WorkBook } from 'xlsx';

type Header = 1 | 'A' | Array<string>;

export const readXLSX = <T>(file: File, header?: Header, defval?: any): Promise<[Array<T>, WorkBook]> => {
  return new Promise((res, rej) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = () =>
      {
        const bufferArray = fileReader.result;
        const workBook = read(bufferArray, { type: "buffer" });
        const sheet = workBook.Sheets[workBook.SheetNames[0]];
        const data = utils.sheet_to_json<T>(sheet, {
          defval,
          header,
          raw: true,
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
