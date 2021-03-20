import React, { useState } from "react"
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
  const [selectedProduct, setSelectedProduct] = useState<{
    id: string
    name: string
    amount: number
  }>({
    id: "",
    name: "",
    amount: 0,
  })

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
          {products.map((p, i) => (
            <div
              className={`${styles.option} ${
                p.daysLeft === 0 ? styles.disabled : ""
              } ${p.id === selectedProduct.id ? styles.selected : ""}`}
              key={`modal-${p.name}-${i}`}
              onClick={() => {
                if ((p.daysLeft && p.daysLeft > 0) || p.noReward) {
                  setSelectedProduct({ id: p.id, name: p.name, amount: 0 })
                }
              }}
              style={{ cursor: p.daysLeft === 0 ? "default" : "pointer" }}
            >
              <div className={styles.productHeading}>
                <div className={`${styles.circle}`}>
                  <div
                    className={`${
                      p.id === selectedProduct.id ? styles.optionSelected : ""
                    }`}
                  ></div>
                </div>
                <div>
                  <h5>{p.name}</h5>
                  <p
                    style={{
                      display: p.minPledge === 0 ? "none" : "",
                    }}
                  >
                    Pledge ${p.minPledge} or more
                  </p>
                </div>
              </div>
              <p className={styles.description}>{p.description}</p>
              <h3
                style={{
                  display: p.minPledge === 0 ? "none" : "",
                }}
              >
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
