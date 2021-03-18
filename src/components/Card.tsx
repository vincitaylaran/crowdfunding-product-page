import React, { ReactNode } from "react"
import * as styles from "./card.module.scss"

interface Props {
  children: ReactNode
  style?: React.CSSProperties
  id?: string
}

const Card = ({ children, style, id }: Props) => {
  return (
    <div id={id} style={style} className={styles.card}>
      {children}
    </div>
  )
}

export default Card
