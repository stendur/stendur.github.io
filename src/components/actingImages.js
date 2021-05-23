import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as actingStyles from "../styles/acting.module.scss"

class ActingImages extends React.Component {

  constructor(props) {
    super(props)
    this.state = { vidToggle: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ vidToggle: !this.state.vidToggle })
  }


  render() {
    if (!this.state.vidToggle) {
      return (
        <div>
          <div className={actingStyles.toggle}>
            <button className={actingStyles.buttons} onClick={this.handleClick}>Videos</button>
          </div>
          <div className={actingStyles.pictures}>
            <StaticImage src="../images/pictures/acting4.jpg" className={actingStyles.images} />

            <StaticImage src="../images/pictures/Steve_HS_full.jpg" className={actingStyles.images} />


            <StaticImage src="../images/pictures/acting-1.jpg" className={actingStyles.images} />


            <StaticImage src="../images/pictures/acting1.jpg" className={actingStyles.images} />


            <StaticImage src="../images/pictures/acting3.jpg" className={actingStyles.images} />


            <StaticImage src="../images/pictures/acting2.jpg" className={actingStyles.images} />

          </div>
        </div>
      )
    } else {
      return (
        <div id="videos">
          <div className={actingStyles.toggle}>
            <button className={actingStyles.buttons} onClick={this.handleClick}>Pictures</button>
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LomgMZqLZS4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/HuHGSj8Ct3c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      )
    }

  }

}

export default ActingImages
