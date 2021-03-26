import React, { useState } from "react"

import { v4 as uuidv4 } from "uuid"

import * as cardStyles from "../components/card.module.scss"
import "../styles/globals.scss"

import MastercraftLogo from "../images/logo-mastercraft.svg"
import BookmarkIcon from "../images/icon-bookmark.svg"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Nav, { Menu } from "../components/Nav"
import Hero from "../components/Hero"
import Container from "../components/Container"
import Card from "../components/Card"
import Button from "../components/Button"
import Modal from "../components/Modal"

export interface Product {
  id: string
  name: string
  minPledge: number
  description: string
  daysLeft?: number
  noReward?: boolean
}

const Bookmark = () => {
  // See gatsby-config.js and go to line 2 to adjust the breakpoint for mobile devices.
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

  // Used for the hamburger menu if user is viewing app from their mobile. If true, hamburger icon turns to a close icon,
  //  an overlay with linear gradient background renders, and a window with navigation options are renders.
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  // Used for the modal. If true, the modal is rendered.
  //
  // This is can be set to false if the user clicks on the clse icon
  // at top right corner of the modal window or if the user clicks on the shaded area that the window is contained in. It can
  // also be set to false when the user clicks on the "Got it!" button after pledging an amount.
  //
  // This can be set to true if the user clicks on the "Back this project" button or any of the "Select Reward" buttons in the
  // about section.
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const [currentDonations, setCurrentDonations] = useState<number>(89914)
  const [totalBackers, setTotalBackers] = useState<number>(5007)
  const [products, setProducts] = useState<Product[]>([
    {
      id: uuidv4(),
      name: "Bamboo Stand",
      minPledge: 25,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      daysLeft: 101,
    },
    {
      id: uuidv4(),
      name: "Black Edition Stand",
      minPledge: 75,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      daysLeft: 64,
    },
    {
      id: uuidv4(),
      name: "Mahogany Special Edition",
      minPledge: 200,
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      daysLeft: 0,
    },
  ])

  const onBackThisProject = () => {
    setIsModalOpen(!isModalOpen)
  }

  const onPledge = (amount: number) => {
    setCurrentDonations(currentDonations + amount)
    setTotalBackers(totalBackers + 1)
  }

  return (
    <main>
      <title>crowdfund</title>

      {/** The Modal component should be hidden if isModalOpen state is false. Should be visible when isModalOpen is true after onBackThisProject is called. */}
      <Modal
        onContinue={onPledge}
        visible={isModalOpen}
        onClose={onBackThisProject}
        products={[
          {
            id: uuidv4(),
            name: "Pledge with no reward",
            minPledge: 0,
            description:
              "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
            noReward: true,
          },
          ...products,
        ]}
      />

      <Nav
        isMenuOpen={isMenuOpen}
        onHamburger={() => {
          setIsMenuOpen(!isMenuOpen)
        }}
      />

      {/* Should be visible when isMenuOpen is true. The isMenuOpen state is set to true when the hamburger icon
      is clicked. The hamburger only appears when viewed on a mobile device. */}
      <Menu visible={isMenuOpen} />

      <Hero />

      <Container>
        <Card id={cardStyles.productName}>
          <div className={cardStyles.logo}>
            <MastercraftLogo />
          </div>

          <h3 className={cardStyles.header}>Mastercaft Bamboo Monitor Riser</h3>
          <p className={cardStyles.description}>
            A beautiful & handcrafted monitor stand to reduce neck and eye
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
              <h2>${currentDonations.toLocaleString()}</h2>
              <p>of $100,000 backed</p>
              <hr /> {/** This is hidden on mobile viewport */}
            </div>

            <div className={cardStyles.cell}>
              <h2>{totalBackers.toLocaleString()}</h2>
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
          <h3>About this project</h3>
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
                  <h3>{p.name}</h3>
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
                    onClick={() => {
                      setIsModalOpen(true)
                    }}
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
