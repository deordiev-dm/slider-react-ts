import ImageSlider from './ImageSlider';

import img1 from './images/dogs-01.jpg';
import img2 from './images/dogs-02.jpg';
import img3 from './images/dogs-03.jpg';
import img4 from './images/dogs-04.jpg';
import img5 from './images/dogs-05.jpg';
import img6 from './images/cats-01.jpg';

const IMAGES = [
  { url: img1, alt: 'Two black dogs in a bed' },
  { url: img2, alt: 'Two black dogs sitting in a box' },
  { url: img3, alt: 'Two brown dogs sitting on a bed' },
  { url: img4, alt: 'Three white dogs on a grass hill with sunset in the background' },
  { url: img5, alt: 'Huskies pulling a sled with aurora in the sky' },
  { url: img6, alt: 'Two cute cats lying on a bench and looking into the camera' },
];

function App() {
  return (
    <>
      <ImageSlider imgData={IMAGES} />
      <a
        href='#'
        style={{ marginTop: '2rem', display: 'inline-block' }}
        id='after-image-slider-controls'
      >
        Try to tab through the page
      </a>
    </>
  );
}

export default App;
