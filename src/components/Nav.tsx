import React from "react"
import * as styles from "./nav.module.scss"

import HamburgerIcon from "../images/icon-hamburger.svg"
import Logo from "../images/logo.svg"

const LinearGradientBg = () => {
  return <div className={styles.linearGradientBg}></div>
}

const Nav = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Logo />

        <div className={styles.hamburgerContainer}>
          <HamburgerIcon />
        </div>

        <div className={styles.links}>
          <a href="#">About</a>
          <a href="#">Discover</a>
          <a href="#">Get Started</a>
        </div>
      </nav>
      <LinearGradientBg />
    </>
  )
}

export default Nav
