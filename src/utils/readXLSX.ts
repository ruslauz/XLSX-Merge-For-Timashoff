import { read, Sheet2JSONOpts, utils, WorkBook } from 'xlsx';

export const readXLSX = <T>(file: File, options?: Sheet2JSONOpts): Promise<[Array<T>, WorkBook]> => {
  return new Promise((res, rej) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = () =>
      {
        const bufferArray = fileReader.result;
        const workBook = read(bufferArray, { type: "buffer" });
        const sheet = workBook.Sheets[workBook.SheetNames[0]];
        const data = utils.sheet_to_json<T>(sheet, options);
        res([data, workBook]);
      };
    fileReader.onerror = () =>
      {
        console.log('error', fileReader.error);
        rej(fileReader.error);
      }
  })
}
