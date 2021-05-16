import * as React from "react"
import Layout from '../components/layout'
import me from "../images/pictures/Steve_HS30.jpg"
import * as layoutStyles from "../styles/header.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <body>
          <header>
              <h1>Steven Piccirelli</h1>
              <img className={layoutStyles.headshot} src={me} alt="Steve"/>
          </header>
          <main>
            <article class="article1">
              <h2>My First Website</h2>
              <p>Welcome to my first website built with React! Take a look around. I'm always in the process of improving it!</p>
            </article>
            <article class="article1">
              <h2>About Me</h2>
              <p>Hi, I'm Steve. I'm an actor and programmer.</p>

              <p>I used to work
              at a library working on a project to digitize six decades worth of
            community newspapers. Click the programming tab for more info.</p>

              <p>Or click the acting tab if you're interested in my acting life!</p>
            </article>
          </main>

      </body>
    </Layout>
  )
}

export default IndexPage
