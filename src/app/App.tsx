import { FC } from 'react';

import { useApp } from '../hooks/useApp';

import { Button } from '../components/Button';

import style from './style.module.css';

export const DIFF_MODEL_KEY = '__EMPTY_2';
export const DIFF_QUANTITY_KEY = '__EMPTY_5'

export const App: FC = () =>
{
  const {
    onSubmit,
    origValue,
    onOrigChange,
    isOrigLoading,
    origLoaded,
    origText,
    wrongFileFormat,
    diffValue,
    diffText,
    onDiffChange,
    isDiffLoading,
    diffLoaded,
    onProcessClick,
    onSaveFileClick,
    downloadIsDisabled,

  } = useApp(); 

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
