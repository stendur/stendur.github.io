import * as React from "react"
import me from "../images/pictures/Steve_HS30.jpg"
import styles from "../styles/header.module.css"

const Header = () => {
    return (
        <header>
            <h1>Steven Piccirelli</h1>
            <img class="headshot" src={me} alt="Steve"></img>
        </header>
    )
}

export default Header