import React, { ReactNode } from "react"
import * as styles from "./container.module.scss"

interface Props {
  children: ReactNode
}

const Container = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>
}

export default Container
