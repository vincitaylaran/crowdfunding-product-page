import React from "react"
import * as styles from "./button.module.scss"

interface Props {
  title: string
  onClick?: () => any
}

const Button = ({ title, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {title}
    </button>
  )
}

export default Button
