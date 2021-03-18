import React from "react"

import HeroMobile from "../images/image-hero-mobile.jpg"
import HeroDesktop from "../images/image-hero-desktop.jpg"
import * as styles from "./hero.module.scss"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Hero = () => {
  const breakpoints = useBreakpoint()

  console.log(breakpoints.xs)

  return (
    <div className={styles.hero}>
      {breakpoints.xs ? (
        <img
          src={HeroMobile}
          alt="mastercraft bamboo monitor riser"
          width="100%"
          height={300}
        />
      ) : (
        <img
          src={HeroDesktop}
          alt="mastercraft bamboo monitor riser"
          width="100%"
          height={400}
        />
      )}
    </div>
  )
}

export default Hero
