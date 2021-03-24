import { FC } from 'react';

import { useApp } from '../hooks/useApp';

import { Button } from '../components/Button';
import { Modal } from '../components/Modal';

import style from './style.module.css';
import { ModalContent } from '../components/ModalContent';

export const DIFF_MODEL_KEY = 'B';
export const DIFF_QUANTITY_KEY = 'C'

export const App: FC = () => {
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
    logValue,
    onLogErase,
    onModalOpen,
    onModalClose,
    modalOpened,
  } = useApp();

  return (
    <div className={style.app}>
      <button className={style.menu} onClick={onModalOpen}>
        <i className="fas fa-bars" />
      </button>
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
            <Button icon="fa-cogs" disabled={!(origLoaded && diffLoaded)} onClick={onProcessClick} />
            <Button icon="fa-file-download" disabled={!origLoaded || !diffLoaded || downloadIsDisabled} onClick={onSaveFileClick} />
          </div>
        </form>
        {
          !!logValue.length && (
            <div className={style.logs}>
              <p className={style.logsTitle}>
                <span className={style.logsTitleText}>Логи:</span>
                <span className={style.logsTitleButtons}>
                  <button className={style.eraseButton} onClick={onLogErase}>
                    <i className="fas fa-eraser" />
                  </button>
                </span>
              </p>
              <div className={style.logsBody}>
                {logValue.map((log, idx) => <span className={style.log} key={idx} >{log}</span>)}
              </div>
            </div>)
        }
        <Modal open={modalOpened} onModalClose={onModalClose}>
          <ModalContent />
        </Modal>
      </main>
    </div>
  );
}

export default App;
