import * as React from "react"

const array = ['acting4.jpg', 'Steve_HS_full.jpg', 'acting-1.jpg', 'acting1.jpg', 'acting3.jpg', 'acting2.jpg']

const images = array.map(image => {
    return <div className="image1"> <img key={image} src={require(`../images/pictures/${image}`)}/> </div>
});



const ActingImages = () => {
  return (
    <div class="content">
        <div id="pictures">
            {images}
        </div>
    </div>

  )
}

export default ActingImages
