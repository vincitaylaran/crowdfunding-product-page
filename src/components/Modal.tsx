import React, { useState } from "react"
import * as styles from "./modal.module.scss"

interface Props {
  visible: boolean
  onClose?: () => any
}

const Modal = ({ onClose, visible = false }: Props) => {
  return (
    <div
      className={`${visible ? styles.modal : styles.hidden}`}
      onClick={onClose}
    >
      <div
        className={styles.window}
        onClick={(e) => {
          e.stopPropagation() // Prevents the modal from closing when clicking on anything within the window.
        }}
      ></div>
    </div>
  )
}

export default Modal
