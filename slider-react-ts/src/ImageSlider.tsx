import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useState } from 'react';
import './ImageSlider.css';

type ImageSliderProps = {
  imgData: {
    url: string;
    alt: string;
  }[];
};

function ImageSlider({ imgData }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function showPrevImage() {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? imgData.length - 1 : prevIndex - 1;
    });
  }

  function showNextImage() {
    setCurrentIndex((prevIndex) => {
      return prevIndex === imgData.length - 1 ? 0 : prevIndex + 1;
    });
  }

  return (
    <section className='image-slider'>
      <a
        href='#after-image-slider-controls'
        className='skip-link'
      >
        Skip Image Slider Controls
      </a>
      <div className='slider-container'>
        {imgData.map((img, index) => {
          return (
            <img
              key={img.url}
              src={img.url}
              alt={img.alt}
              className='slider-image'
              style={{ transform: `translate(${-100 * currentIndex}%)` }}
              aria-hidden={index === currentIndex ? false : true}
            />
          );
        })}
      </div>
      <button
        onClick={showPrevImage}
        className='slider-btn slider-btn--prev'
        aria-label='Show Previous Image'
      >
        <FaArrowAltCircleLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className='slider-btn slider-btn--next'
        aria-label='Show Next Image'
      >
        <FaArrowAltCircleRight aria-hidden />
      </button>
      <div className='slider-pagination'>
        {imgData.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${index === currentIndex ? 'active' : ''}`}
              aria-label={`Show Image ${index + 1}`}
            ></button>
          );
        })}
      </div>
      <div id='after-image-slider-controls'></div>
    </section>
  );
}

export default ImageSlider;
