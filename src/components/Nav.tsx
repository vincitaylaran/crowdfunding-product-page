import React from "react"
import * as styles from "./nav.module.scss"

import HamburgerIcon from "../images/icon-hamburger.svg"
import Logo from "../images/logo.svg"

const Nav = () => {
  // TODO: fix issue where the navbar children are losing opacity. Children should have an opacity of 1, but their container should be 0.6.
  return (
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
  )
}

export default Nav
