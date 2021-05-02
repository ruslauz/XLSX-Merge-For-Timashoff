import { FC } from 'react';
import cn from 'classnames';

import style from './style.module.css';

type ModalContentType = {
}

export const ModalContent: FC<ModalContentType> = () => (
  <div className={style.item}>
    <label className={style.checkBoxLabel}>
      <input className={style.checkbox} type="checkbox" />
      <span className={style.checkBoxLabelText}>Отображать логи</span>
    </label>
  </div>
);
