import React from 'react';
import styles from './MenuList.module.css';

const MenuItem = ({ children }: React.HtmlHTMLAttributes<HTMLUListElement>) => {
  return (
    <nav>
      <ul className={styles.navegacao}>{children}</ul>
    </nav>
  )
}

export default MenuItem;