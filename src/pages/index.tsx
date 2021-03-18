import * as React from "react"
import * as styles from "./index.module.scss"
import "../styles/globals.scss"
import Nav from "../components/Nav"
import Hero from "../components/Hero"

const IndexPage = () => {
  return (
    <main>
      <title>crowdfund</title>
      <Nav />
      <Hero />
    </main>
  )
}

export default IndexPage
