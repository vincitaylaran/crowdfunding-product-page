import React from "react"
import * as styles from "./modal.module.scss"
import { Product as IProduct } from "../pages/index"
import CloseModalIcon from "../images/icon-close-modal.svg"
import Card from "./Card"
import Button from "./Button"

interface Props {
  visible: boolean
  products: IProduct[]
  onClose?: () => any
}

const CloseModal = ({ ...props }) => (
  <div onClick={props.onClick} className={styles.closeModalIcon}>
    <CloseModalIcon />
  </div>
)

const Modal = ({ products, onClose, visible = false }: Props) => {
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
      >
        <div className={styles.heading}>
          <h4>Back this project</h4>
          <CloseModal onClick={onClose} />
        </div>
        <p className={styles.question}>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className={styles.rewards}>
          <div className={styles.option}>
            <div className={styles.productHeading}>
              <div className={styles.circle}></div>
              <h5>Pledge with no reward</h5>
            </div>

            <p>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </div>
          {products.map((p, i) => (
            <div
              className={`${styles.option} ${
                p.daysLeft === 0 ? styles.disabled : ""
              }`}
              key={`modal-${p.name}-${i}`}
            >
              <div className={styles.productHeading}>
                <div className={styles.circle}></div>
                <div>
                  <h5>{p.name}</h5>
                  <p>Pledge ${p.minPledge} or more</p>
                </div>
              </div>
              <p className={styles.description}>{p.description}</p>
              <h3>
                {p.daysLeft} <span>left</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Modal
