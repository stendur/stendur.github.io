import * as React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Header from "../components/header"
import styles from "../styles/global.module.css"

const IndexPage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Header></Header>
      <article class="article1">
        <h2>My First Website</h2>
        <p>Welcome to my first website! Take a look around.</p>
      </article>
      <article class="article1">
        <h2>About Me</h2>
        <p>Hi, I'm Steve. I'm an actor and programmer.</p>

        <p>Pre-covid, I volunteered
        at a library working on a project to digitize six decades worth of
      community newspapers. Click the programming tab for more info.</p>

        <p>Or click the acting tab if you're interested in my acting life!</p>
      </article>
      <Footer></Footer>
    </main>
  )
}

export default IndexPage
