import { FC } from 'react';

import { Styles } from './Button.styles';

import { IButton } from './@types/Button.types';

export const Button: FC<IButton> = ({ icon, label, type }) => {
  const renderIcon = () => (icon ? <Styles.Icon>{icon}</Styles.Icon> : null);

  const renderLabel = () => (label ? <Styles.Label>{label}</Styles.Label> : null);

  return (
    <Styles.Button>
      {renderIcon()}
      {renderLabel()}
    </Styles.Button>
  );
};
