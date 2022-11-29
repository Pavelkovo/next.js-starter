import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className={styles.root}>
      {children}
    </button>
  );
};

export default Button;
