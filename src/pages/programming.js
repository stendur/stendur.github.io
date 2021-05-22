import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/header.module.scss"

const Programming = () => {
  return (
    <Layout>
      <header className={styles.header}>
        <h1>Programming Projects</h1>
      </header>
      <body>
        <main>
          <article class="article1">
            <h2>crop-and-OCR (Python)</h2>
            <p>I used to work at a library, and at the time I found a stash of old newspapers dating back to 1948.
            I decided to buy a scanner and start digitizing them. I needed a script to automate
          cropping the (oversized) scans and OCR-ing the cropped pictures, so I learned a little Python and used Pytesseract and Pillow to do just that.</p>
          <p>While the program I wrote gets the job done, the project is still in its infancy,
          but I have ideas on how to improve on it. I will link to the published digital archive when I am finished digitizing.</p>
          </article>
          <article class="article1">
            <h2>This Website</h2>
            <p>This is my first website. I used React and GatsbyJS to build it!</p>
            <p>Check out my <a class="link" href="https://github.com/stendur">GitHub!</a></p>
          </article>
        </main>
      </body>
    </Layout>

  )
}

export default Programming
