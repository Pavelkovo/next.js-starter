import React from 'react';
import Link, { LinkProps } from 'next/link';

import styles from './LinkVariant.module.scss';

interface LinkVariantProps extends LinkProps {
  children: React.ReactNode;
}
const LinkVariant = ({ children, ...props }: LinkVariantProps) => {
  return (
    <Link {...props} className={styles.link}>
      {children}
    </Link>
  );
};

export default LinkVariant;
