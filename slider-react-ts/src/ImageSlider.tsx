import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import "./ImageSlider.css"

type ImageSliderProps = {
  imgUrls: string[]
}

function ImageSlider({imgUrls} : ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  function showPrevImage() {
    setCurrentIndex(prevIndex => {
      return prevIndex === 0 ? imgUrls.length - 1 : prevIndex - 1;
    })
  }

  function showNextImage() {
    setCurrentIndex(prevIndex => {
      return prevIndex === imgUrls.length - 1 ? 0 : prevIndex + 1;
    })
  }


  return (
  <div className="slider">
    <div className="slider-container">
      { imgUrls.map((url) => {
        return (
        <img 
          key={url} 
          src={url} 
          alt="" 
          className="slider-image" 
          style={{transform: `translate(${-100 * currentIndex}%)`}} 
        />
      )
      }) }
    </div>
    <button onClick={showPrevImage} className="slider-btn slider-btn--prev">
      <FaArrowAltCircleLeft />
    </button>
    <button onClick={showNextImage} className="slider-btn slider-btn--next" >
    <FaArrowAltCircleRight />
    </button>
    <div className="slider-pagination">
      {
        imgUrls.map((_, index) => {
          return (
            <button 
              key={index} 
              onClick={() =>  setCurrentIndex(index)}
              className={`${index === currentIndex ? "active" : ""}`}
            >
            </button>)
        })
      }
    </div>
  </div>
  ); 
}

export default ImageSlider;