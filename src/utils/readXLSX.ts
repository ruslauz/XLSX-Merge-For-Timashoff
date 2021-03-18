import { read, utils } from 'xlsx';

export const readXLSX = (file: File) => {
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

/* 
const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);

        fileReader.onloadstart = () =>
        {
          setLoading(true);
        }

        fileReader.onload = () =>
        {
          setLoading(false);
          setLoadedFiles(prev => prev + 1);
          const bufferArray = fileReader.result;
          const workBook = read(bufferArray, { type: "buffer" });
          const sheet = workBook.Sheets[workBook.SheetNames[0]];
          const data: Array<OrigFile> = utils.sheet_to_json(sheet);
          console.log(data);
          if (isOrig) {
            const map = data.reduce<any>((acc, item, index) =>
            {
              item.model.trim() && Object.assign(acc, { [item.model.trim()]: index });
              return acc;
            }, {});
            console.log(map);


          }
        }

        fileReader.onerror = () =>
        {
          console.log('error', fileReader.error);
          setLoading(false);
        }
*/