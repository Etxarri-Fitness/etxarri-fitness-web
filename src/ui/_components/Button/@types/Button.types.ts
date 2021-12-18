import { ReactNode } from 'react';
import { IconType } from 'react-icons';

type ButtonType = 'ERROR' | 'SUCCESS' | 'PRIMARY' | 'SECONDARY';

export interface IButton {
  icon?: IconType | ReactNode;
  label?: string;
  type?: ButtonType;
}
