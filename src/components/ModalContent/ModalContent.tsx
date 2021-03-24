import { FC } from 'react';
import cn from 'classnames';

import style from './style.module.css';

type ModalContentType = {
}

export const ModalContent: FC<ModalContentType> = () => (
  <div className={style.settings}>
    <header className="header">
      <span className="title">Настройки</span>
    </header>
    <div className="body">
      <div className="item">
        <label className="checkBoxLabel">
          <span className="checkBoxLabelText"></span>
          <input className="checkbox" type="checkbox" />
        </label>
      </div>
    </div>
  </div>
);
