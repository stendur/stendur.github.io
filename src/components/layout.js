import React from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import * as layoutStyles from "../styles/layout.module.scss"



const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Navbar></Navbar>
                {props.children}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout