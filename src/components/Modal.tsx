import React, { useState } from "react"
import * as styles from "./modal.module.scss"
import { Product as IProduct } from "../pages/index"
import CloseModalIcon from "../images/icon-close-modal.svg"
import Button from "./Button"
import CheckIcon from "../images/icon-check.svg"

interface IOptionsWindow {
  visible?: boolean
  products: IProduct[]
  onClose?: () => any
  onContinue: (amount: number) => void
}

const CloseModal = ({ ...props }) => (
  <div onClick={props.onClick} className={styles.closeModalIcon}>
    <CloseModalIcon />
  </div>
)

const OptionsWindow = ({ products, onClose, onContinue }: IOptionsWindow) => {
  const [selectedProduct, setSelectedProduct] = useState<{
    id: string
    name: string
  }>({
    id: "",
    name: "",
  })
  const [pledgeAmount, setPledgeAmount] = useState<string>("")

  return (
    <div
      className={styles.optionsWindow}
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
        {products.map((p: any, i: number) => (
          <div
            className={`${styles.option} ${
              p.daysLeft === 0 ? styles.disabled : ""
            } ${p.id === selectedProduct.id ? styles.selected : ""}`}
            key={`modal-${p.name}-${i}`}
            onClick={() => {
              if ((p.daysLeft && p.daysLeft > 0) || p.noReward) {
                setSelectedProduct({
                  id: p.id,
                  name: p.name,
                })
                setPledgeAmount(p.minPledge.toString())
              }
            }}
            style={{ cursor: p.daysLeft === 0 ? "default" : "pointer" }}
          >
            <div className={styles.optionBody}>
              <div className={styles.productHeading}>
                <div className={styles.info}>
                  <div className={`${styles.circle}`}>
                    <div
                      className={`${
                        p.id === selectedProduct.id ? styles.optionSelected : ""
                      }`}
                    ></div>
                  </div>

                  <div className={styles.moreInfo}>
                    <h5>{p.name}</h5>
                    <p
                      style={{
                        display: p.minPledge === 0 ? "none" : "",
                        color: p.id === selectedProduct.id ? "#3CB3AB" : "",
                        fontWeight: p.id === selectedProduct.id ? 700 : 300,
                      }}
                    >
                      Pledge ${p.minPledge} or more
                    </p>
                  </div>
                </div>

                <h3
                  id={styles.daysLeftDesktop}
                  className={styles.daysLeft}
                  style={{
                    display: p.minPledge === 0 ? "none" : "",
                  }}
                >
                  {p.daysLeft} <span>left</span>
                </h3>
              </div>

              <p className={styles.description}>{p.description}</p>
              <h3
                id={styles.daysLeftMobile}
                className={styles.daysLeft}
                style={{
                  display: p.minPledge === 0 ? "none" : "",
                }}
              >
                {p.daysLeft} <span>left</span>
              </h3>
            </div>

            <footer
              className={styles.optionFooter}
              style={{
                display: p.id === selectedProduct.id ? "flex" : "none",
              }}
            >
              <p>Enter your pledge</p>
              <div className={styles.footerMoney}>
                <div className={styles.pledgeField}>
                  <div className={styles.currencySymbol}>$</div>
                  <input
                    type="text"
                    value={`${pledgeAmount}`}
                    onChange={(e) => {
                      if (!Number.isNaN(Number(e.target.value))) {
                        setPledgeAmount(e.target.value)
                      }
                    }}
                  />
                </div>

                <Button
                  title="Continue"
                  onClick={() => {
                    onContinue(Number(pledgeAmount))
                  }}
                />
              </div>
            </footer>
          </div>
        ))}
      </div>
    </div>
  )
}

const ThankYouWindow = ({ ...props }) => (
  <div
    className={styles.thankYouWindow}
    onClick={(e) => {
      e.stopPropagation() // Prevents the window from closing when clicked.
    }}
  >
    <CheckIcon />
    <h3>Thanks for your support!</h3>
    <p>
      Your pledge brings us one step closer to sharing Mastercraft Bamboo
      Monitor Riser worldwide. You will get an email once our campaign is
      completed.
    </p>
    <Button title="Got it!" onClick={props.onClose} />
  </div>
)

const Modal = ({
  products,
  onClose,
  onContinue,
  visible = false,
}: IOptionsWindow) => {
  const [showThankYou, setShowThankYou] = useState<boolean>(false)

  return (
    <div
      className={`${visible ? styles.modal : styles.hidden}`}
      onClick={onClose}
    >
      {showThankYou ? (
        <ThankYouWindow
          onClose={() => {
            if (onClose) {
              onClose()
            }
            setShowThankYou(false)
          }}
        />
      ) : (
        <OptionsWindow
          products={products}
          onClose={onClose}
          onContinue={(amount: number) => {
            if (amount > 0) {
              onContinue(amount)
              setShowThankYou(true)
            }
          }}
        />
      )}
    </div>
  )
}

export default Modal
