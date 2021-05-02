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
    onTemplateUpload,
    isTemplateLoading,
    templateFileName,
    templateLoaded,
  } = useApp();

  return (
    <div className={style.app}>
      <header className={style.header}>
      </header>
      <main className={style.main}>
        <form action="" className={style.mainForm} onSubmit={onSubmit}>
          <label className={style.label}>
            <input type="file" className={style.input} onChange={onOrigChange} accept=".xlsx" value={origValue} />
            <span className={style.labelText}>
              {isOrigLoading
                ? "Файл загружается..."
                : (wrongFileFormat && "Неверный формат") || origText || "Мой шаблон"
              }
            </span>
            {isOrigLoading
              ? <i className="fas fa-spinner fa-pulse" />
              : <i className="fas fa-file-excel" />}
          </label>
          <label className={style.label}>
            <input type="file" className={style.input} onChange={onDiffChange} accept=".xlsx" value={diffValue} />
            <span className={style.labelText}>
              {isDiffLoading
                ? "Файл загружается..."
                : diffText || "Остатки"
              }
            </span>
            {isDiffLoading
              ? <i className="fas fa-spinner fa-pulse" />
              : <i className="fas fa-file-excel" />
            }
          </label>
          <label className={style.label}>
            <input type="file" className={style.input} onChange={onTemplateUpload} accept=".xlsx" value='' />
            <span className={style.labelText}>
              {isTemplateLoading
                ? "Файл загружается..."
                : templateFileName || "Шаблон Озон"
              }
            </span>
            {isTemplateLoading
              ? <i className="fas fa-spinner fa-pulse" />
              : <i className="fas fa-file-excel" />
            }
          </label>
          <div className={style.buttons}>
            <Button icon="fa-cogs" disabled={!(origLoaded && diffLoaded && templateLoaded)} onClick={onProcessClick} />
            <Button icon="fa-file-download" disabled={!origLoaded || !diffLoaded || !templateLoaded || downloadIsDisabled} onClick={onSaveFileClick} />
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
