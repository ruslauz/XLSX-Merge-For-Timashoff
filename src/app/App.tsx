import { ChangeEvent, FC, FormEventHandler, useState } from 'react';
import { utils, WorkBook, writeFile } from 'xlsx';

import { Button } from '../components/Button';

import { OrigFile } from '../types/origFile';

import { readXLSX } from '../utils/readXLSX';

import style from './style.module.css';


export const App: FC = () =>
{
  const DIFF_MODEL_KEY = '__EMPTY_2';
  const DIFF_QUANTITY_KEY = '__EMPTY_5'
  type DiffFile = {
    [DIFF_MODEL_KEY]: string
    [DIFF_QUANTITY_KEY]: number | string
  }

  const [origText, setOrigText] = useState('');
  const [origValue, setOrigValue] = useState('');
  const [isOrigLoading, setOrigLoading] = useState(false);
  const [origLoaded, setOrigLoaded] = useState(false);
  const [origData, setOrigData] = useState<Array<OrigFile>>([]);
  const [workBook, setWorkBook] = useState<WorkBook | null>(null)
  const [map, setMap] = useState<{ [key: string]: number }>({});
  const [wrongFileFormat, setWrongFileFormat] = useState(false);

  const [diffText, setDiffText] = useState('');
  const [diffValue, setDiffValue] = useState('');
  const [isDiffLoading, setDiffLoading] = useState(false);
  const [diffLoaded, setDiffLoaded] = useState(false);
  const [diffData, setDiffData] = useState<Array<DiffFile>>([]);

  const [downloadIsDisabled, setDownloadDisabled] = useState(true);

  const resetApp = () =>
  {
    setOrigText('');
    setOrigLoaded(false);
    setOrigData([]);
    setWorkBook(null);
    setMap({});
    setDiffText('');
    setDiffLoaded(false);
    setDiffData([]);
    setDownloadDisabled(true);
    setOrigValue('');
    setDiffValue('');
  }

  const onOrigChange = async (e: ChangeEvent<HTMLInputElement>) =>
  {
    if (e.target.files?.length) {
      setOrigValue(e.target.value);
      setDownloadDisabled(true);
      setWrongFileFormat(false);
      setOrigText(e.target.files[0].name);
      const file = e.target.files[0]
      setOrigLoading(true);
      try {
        const [data, workBook] = await readXLSX<OrigFile>(file);
        setOrigData(data);
        setWorkBook(workBook);

        const map = data.reduce<{ [key: string]: number }>((acc, item, index) =>
        {
          item.model && item.model.trim() && Object.assign(acc, { [item.model.trim()]: index });
          return acc;
        }, {});

        if (Object.keys(map).length) {
          setMap(map);
          setOrigLoaded(true);
        } else {
          setWrongFileFormat(true);
          setOrigLoaded(false);
        };
      } catch (error) {
        console.log(error);
        setOrigLoaded(false);
      } finally {
        setOrigLoading(false);
      }
    } else {
      setOrigText('');
      setOrigValue('');
      setOrigLoaded(false);
    }
  };

  const onDiffChange = async (e: ChangeEvent<HTMLInputElement>) =>
  {
    if (e.target.files?.length) {
      setDiffValue(e.target.value);
      setDownloadDisabled(true);
      setDiffText(e.target.files[0].name);
      const file = e.target.files[0]
      setDiffLoading(true);
      try {
        const [data] = await readXLSX<DiffFile>(file);
        setDiffData(data);
        setDiffLoaded(true);
      } catch (error) {
        console.log(error);
        setDiffLoaded(false);
      } finally {
        setDiffLoading(false);
      }
    } else {
      setDiffText('');
      setDiffValue('');
      setDiffLoaded(false);
    }
  };

  const onProcessClick = () =>
  {
    const newData = diffData.reduce((acc, item) =>
    {
      if (typeof item[DIFF_QUANTITY_KEY] === "number" && typeof item[DIFF_MODEL_KEY] === "string" && map[item[DIFF_MODEL_KEY].trim()]) {
        acc[map[item[DIFF_MODEL_KEY].trim()]].quantity = item[DIFF_QUANTITY_KEY] as number;
      }
      return acc
    }, [...origData]);
    setOrigData(newData);
    workBook && utils.sheet_add_json(workBook.Sheets[workBook.SheetNames[0]], origData);
    setDownloadDisabled(false);
  }

  const onSaveFileClick = () =>
  {
    workBook && writeFile(workBook, `new_${origText}`);
    resetApp();
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = e => e.preventDefault();

  return (
    <div className={style.app}>
      <header className={style.header}>
      </header>
      <main className={style.main}>
        <form action="" className={style.mainForm} onSubmit={onSubmit}>
          <label className={style.mainLabel}>
            <input type="file" className={style.mainFile} onChange={onOrigChange} accept=".xlsx" value={origValue} />
            <span className={style.labelText}>
              {isOrigLoading
                ? "Файл загружается..."
                : (wrongFileFormat && "Неверный формат") || origText || "Эталон"
              }
            </span>
            {isOrigLoading
              ? <i className="fas fa-spinner fa-pulse" />
              : <i className="fas fa-file-excel" />}
          </label>
          <label className={style.diffLabel}>
            <input type="file" className={style.diffFile} onChange={onDiffChange} accept=".xlsx" value={diffValue} />
            <span className={style.labelText}>
              {isDiffLoading
                ? "Файл загружается..."
                : diffText || "Изменения"
              }
            </span>
            {isDiffLoading
              ? <i className="fas fa-spinner fa-pulse" />
              : <i className="fas fa-file-excel" />
            }
          </label>
          <div className={style.buttons}>
            <Button icon="fa-cog" disabled={!(origLoaded && diffLoaded)} onClick={onProcessClick} />
            <Button icon="fa-file-download" disabled={!origLoaded || !diffLoaded || downloadIsDisabled} onClick={onSaveFileClick} />
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
