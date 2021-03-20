import React, { useState } from "react"
import * as indexStyles from "../components/index.module.scss"
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
import Modal from "../components/Modal"

export interface Product {
  name: string
  minPledge: number
  description: string
  daysLeft: number
}

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
  const [products, setProducts] = useState<Product[]>([
    {
      name: "Bamboo Stand",
      minPledge: 25,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      daysLeft: 101,
    },
    {
      name: "Black Edition Stand",
      minPledge: 75,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      daysLeft: 64,
    },
    {
      name: "Mahogany Special Edition",
      minPledge: 200,
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      daysLeft: 0,
    },
  ])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true) // TODO: change back to false when finished.

  const onBackThisProject = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <main>
      <title>crowdfund</title>
      <Modal
        visible={isModalOpen}
        onClose={onBackThisProject}
        products={products}
      />
      {/** Should be hidden if isModalOpen state is false. Should be visible when isModalOpen is true after onBackThisProject is called. */}
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
            <Button title="Back this project" onClick={onBackThisProject} />
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

        <Card id={cardStyles.productAbout}>
          <h4>About this project</h4>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
          <div className={cardStyles.rewards}>
            {products.map((p, i) => (
              <Card key={`${p.name}-${i}`} disabled={p.daysLeft === 0}>
                <div className={cardStyles.headings}>
                  <h5>{p.name}</h5>
                  <p className={cardStyles.subtext}>
                    Pledge ${p.minPledge} or more
                  </p>
                </div>
                <p className={cardStyles.rewardDescription}>{p.description}</p>

                <div className={cardStyles.footer}>
                  <h3>
                    {p.daysLeft} <span>left</span>
                  </h3>

                  <Button
                    disabled={p.daysLeft === 0}
                    title={p.daysLeft === 0 ? "Out of Stock" : "Select Reward"}
                  />
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </Container>
    </main>
  )
}

export default IndexPage
