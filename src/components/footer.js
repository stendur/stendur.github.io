import * as React from 'react'
import * as styles from '../styles/footer.module.scss'
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
    return (
            <footer>
                <a href="https://twitter.com/stevemeetsteve" class="twitter"><StaticImage src="../images/Twitter.png" className={styles.image}/></a>
                <a href="https://github.com/stendur" class="github"><StaticImage src="../images/GitHub-Mark-64px.png" className={styles.image}/></a>
                <a href="https://www.linkedin.com/in/stevemeetsteve" class="linkedin"><StaticImage src="../images/LinkedIn-Logos/Li-In-Bug.png" className={styles.image}/></a>
            </footer>
    )
}

export default Footer