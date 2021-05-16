import * as React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/footer.module.css'
import twitterLogo from "../images/Twitter.png"
import linkedinLogo from "../images/LinkedIn-Logos/Li-In-Bug.png"
import githubLogo from "../images/GitHub-Mark-64px.png"

const Footer = () => {
    return (
            <footer>
                <a href="https://twitter.com/stevemeetsteve" class="twitter"><img src={twitterLogo}></img></a>
                <a href="https://www.linkedin.com/in/stevemeetsteve" class="linkedin"><img src={linkedinLogo}></img></a>
                <a href="https://github.com/stendur" class="github"><img src={githubLogo}></img></a>
            </footer>
    )
}

export default Footer