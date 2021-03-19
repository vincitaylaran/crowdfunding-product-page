import React from "react"
import * as styles from "./button.module.scss"

interface Props {
  title: string
  disabled?: boolean
  onClick?: () => any
}

const Button = ({ title, onClick, disabled = false }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
    >
      {title}
    </button>
  )
}

export default Button
