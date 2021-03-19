import React, { ReactNode } from "react"
import * as styles from "./card.module.scss"

interface Props {
  children: ReactNode
  style?: React.CSSProperties
  id?: string
  disabled?: boolean
}

const Card = ({ children, style, id, disabled = false }: Props) => {
  return (
    <div
      id={id}
      style={style}
      className={`${styles.card} ${disabled ? styles.disabled : ""}`}
    >
      {children}
    </div>
  )
}

export default Card
