import { FC, memo, MouseEventHandler, ReactNode } from 'react';
import style from './Modal.module.css';

type ModalType = {
  open: boolean,
  title: string,
  children?: ReactNode,
  onModalClose: () => void,
}

export const Modal: FC<ModalType> = ({ open, title, children, onModalClose }) => {

  const onModalClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
  }

  return open ? (
    <div className={style.layer} onClick={onModalClose}>
      <div className={style.modal} onClick={onModalClick}>
        <header className={style.header}>
          <span className={style.title}>{title}</span>
          <button className={style.close} onClick={onModalClose}><i className="fas fa-times" /></button>
        </header>
        <div className={style.body}>
          {children}
        </div>
        <footer className={style.footer}>
        </footer>
      </div>
    </div>
  ) : null
}

export default memo(Modal);