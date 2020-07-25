import React, { ReactNode } from "react"

import styles from "./Header.module.scss"

interface HeaderProps {
  children: ReactNode
}

export default ({ children }: HeaderProps) => (
  <header className={styles.header}>
    <div className={styles.header__container}>
      <div className={styles.header__content}>
        <div className={styles.header__navigation}>{children}</div>
      </div>
    </div>
  </header>
)
