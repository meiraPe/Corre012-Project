import styles from './Header.module.css'
import React from 'react';

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
          <picture>
              <a href=''><img src='./logo.PNG'/></a>
          </picture>

          <nav>
            <a href='#Products'>Produtos</a>
            <a href='#'>Sobre</a>
            <a href='#'>Contato</a>
          </nav>
      </div>
    </header>
  )
}