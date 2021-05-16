import * as React from "react"
import me from "../images/pictures/Steve_HS30.jpg"
import headerStyles from "../styles/header.module.scss"

const Header = () => {
    return (
        <header>
            <h1>Steven Piccirelli</h1>
            <img class=".headshot" src={me} alt="Steve" />
        </header>
    )
}

export default Header