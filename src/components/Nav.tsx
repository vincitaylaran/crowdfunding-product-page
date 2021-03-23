import React, { useState } from "react"
import * as styles from "./nav.module.scss"

import HamburgerIcon from "../images/icon-hamburger.svg"
import Logo from "../images/logo.svg"
import CloseMenuIcon from "../images/icon-close-menu.svg"

interface Props {
  isMenuOpen: boolean
  onHamburger: () => void
}

const LinearGradientBg = () => {
  return <div className={styles.linearGradientBg}></div>
}

const Hamburger = ({ ...props }) => {
  return (
    <div onClick={props.onClick}>
      {props.isMenuOpen ? <CloseMenuIcon /> : <HamburgerIcon />}
    </div>
  )
}

export const Menu = ({ ...props }) => {
  return (
    <div className={`${props.visible ? styles.menu : styles.hidden}`}>
      <div className={styles.window}>
        {/* The anchor link was obtained using the dev tools. Gatsby generates a unique id for each module. */}
        <div className={styles.link}>
          <a href="#card-module--productAbout--1PTq9">About</a>
        </div>
        <div className={styles.link}>
          <a href="#">Discover</a>
        </div>
        <div className={styles.link}>
          <a href="#">Get Started</a>
        </div>
      </div>
    </div>
  )
}

const Nav = ({ isMenuOpen, onHamburger }: Props) => {
  return (
    <>
      <nav className={styles.navbar}>
        <Logo />

        <div className={styles.hamburgerContainer}>
          <Hamburger onClick={onHamburger} isMenuOpen={isMenuOpen} />
        </div>

        <div className={styles.links}>
          {/* The anchor link was obtained using the dev tools. Gatsby generates a unique id for each module. */}
          <a href="#card-module--productAbout--1PTq9">About</a>
          <a href="#">Discover</a>
          <a href="#">Get Started</a>
        </div>
      </nav>
      <LinearGradientBg />
    </>
  )
}

export default Nav
