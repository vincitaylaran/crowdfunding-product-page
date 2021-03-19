import * as React from "react"
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

  return (
    <div className={cardStyles.bookmark}>
      {breakpoint.xs ? (
        <BookmarkIcon />
      ) : (
        <div className={cardStyles.desktopVersion}>
          <BookmarkIcon />
          <span>Bookmark</span>
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
          color: "#3CB3AB",
          height: "100%",
        }}
      ></div>
    </div>
  )
}

const IndexPage = () => {
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
          <h2>$89,914</h2>
          <p>of $100,000 backed</p>
          <hr />
          <h2>$5,007</h2>
          <p>total backers</p>
          <hr />
          <h2>56</h2>
          <p>days left</p>

          <ProgressBar progress={78.2} />
        </Card>

        <Card>hello</Card>
      </Container>
    </main>
  )
}

export default IndexPage
