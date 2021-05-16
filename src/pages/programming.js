import * as React from "react"
import Layout from "../components/layout"

const Programming = () => {
  return (
    <Layout>
      <body>
      <header>
        <h1>Programming Projects</h1>
      </header>

      <main>
        <article class="article1">
          <h2>crop-and-OCR (Python)</h2>
          <p>I volunteer at a library, and recently I found a stash of old newspapers dating back to 1948.
           I decided to buy a scanner and start digitizing them. I needed a script to automate
         cropping the (oversized) scans and OCR-ing the cropped pictures, so I learned Python and used Pytesseract and Pillow to do just that.</p>
        <p>While the small script I wrote gets the job done if you know what you're looking at (ha!), the project is still in its infancy,
        but I have ideas on how to improve on it. I will link to the published digital archive when I am finished digitizing.</p>
        </article>
        <article class="article1">
          <h2>This Website</h2>
          <p>This is my first website. It's mostly HTML/CSS but I'm periodically adding JavaScript to it as I learn new tricks.</p>
          <p>Check out my <a class="link" href="https://github.com/stendur">GitHub!</a></p>
        </article>
      </main>
      </body>
    </Layout>

  )
}

export default Programming
