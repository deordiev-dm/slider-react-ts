import ImageSlider from "./ImageSlider"

import img1 from "./images/dogs-01.jpg"
import img2 from "./images/dogs-02.jpg"
import img3 from "./images/dogs-03.jpg"
import img4 from "./images/dogs-04.jpg"
import img5 from "./images/dogs-05.jpg"
import img6 from "./images/cats-01.jpg"

const IMAGES = [img1, img2, img3, img4, img5, img6]

console.log(img1)

function App() {
  return <ImageSlider imgUrls={IMAGES}/>
}

export default App
