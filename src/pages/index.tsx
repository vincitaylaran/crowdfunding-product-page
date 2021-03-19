import React, { useState } from "react"
import * as cardStyles from "../components/card.module.scss"
import "../styles/globals.scss"

import MastercraftLogo from "../images/logo-mastercraft.svg"
import BookmarkIcon from "../images/icon-bookmark.svg"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Container from "../components/Container"
import Card from "../components/Card"
import Button from "../components/Button"

const Bookmark = () => {
  const breakpoint = useBreakpoint()
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)

  const changeIconColor = () => (isBookmarked ? cardStyles.bookmarked : "")

  return (
    <div
      className={`${cardStyles.bookmark} ${changeIconColor()}`}
      onClick={() => {
        setIsBookmarked(!isBookmarked)
      }}
    >
      {breakpoint.xs ? (
        <BookmarkIcon />
      ) : (
        <div className={`${cardStyles.desktopVersion} ${changeIconColor()}`}>
          <div className={cardStyles.iconContainer}>
            <BookmarkIcon />
          </div>
          <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
        </div>
      )}
    </div>
  )
}

const ProgressBar = ({ ...props }) => {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: 33.5,
        background: "rgb(245, 245, 245)",
        height: 12,
      }}
    >
      <div
        style={{
          borderRadius: "inherit",
          background: "#3CB3AB",
          width: `${props.progress}%`,
          maxWidth: "100%",
          color: "#3CB3AB",
          height: "100%",
        }}
      ></div>
    </div>
  )
}

const IndexPage = () => {
  const donationGoal = 100000
  const [currentDonations, setCurrentDonations] = useState<number>(89914)

  return (
    <main>
      <title>crowdfund</title>
      <Nav />
      <Hero />

      <Container>
        <Card id={cardStyles.productName}>
          <div className={cardStyles.logo}>
            <MastercraftLogo />
          </div>

          <h3 className={cardStyles.header}>Mastercaft Bamboo Monitor Riser</h3>
          <p className={cardStyles.description}>
            A beautifully handcrafted monitor stand to reduce neck and eye
            strain.
          </p>

          <div className={cardStyles.buttons}>
            <Button title="Back this project" />
            <Bookmark />
          </div>
        </Card>

        <Card id={cardStyles.productProgress}>
          <div className={cardStyles.progress}>
            <div className={cardStyles.cell}>
              <h2>$89,914</h2>
              <p>of $100,000 backed</p>
              <hr /> {/** This is hidden on mobile viewport */}
            </div>

            <div className={cardStyles.cell}>
              <h2>5,007</h2>
              <p>total backers</p>
              <hr /> {/** This is hidden on mobile viewport */}
            </div>

            <div className={cardStyles.cell}>
              <h2>56</h2>
              <p>days left</p>
            </div>
          </div>

          <ProgressBar progress={(currentDonations / donationGoal) * 100} />
        </Card>

        <Card>hello</Card>
      </Container>
    </main>
  )
}

export default IndexPage
