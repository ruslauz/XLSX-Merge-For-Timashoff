import { FC, MouseEventHandler } from 'react';
import cn from 'classnames';

import style from './style.module.css';

type ButtonType = {
  icon?: string
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<ButtonType> = ({ icon, disabled, onClick }) => (
  <button className={style.button} type="submit" disabled={disabled} onClick={onClick}>
    <i className={cn("fas ", icon)} />
  </button>
);
