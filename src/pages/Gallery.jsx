import eight from '../assets/eight.jpg';
import five from '../assets/five.jpg';
import four from '../assets/four.jpg';
import seven from '../assets/seven.jpg';
import nine from '../assets/nine.jpg';
import ten from '../assets/ten.jpg';


const Gallery = () => {
  return (
    <div className="gallery">
        <h2>Image Gallery</h2>
        <img 
          src={eight}
          alt="Eight"
          className="gallery-image"
        />
        <img 
          src={five}
          alt="Five"
          className="gallery-image"
        />
        <img 
          src={four}
          alt="Four"
          className="gallery-image"
        />
        <img 
          src={seven}
          alt="Seven"
          className="gallery-image"
        />
        <img 
          src={nine}
          alt="Nine"
          className="gallery-image"
        />
        <img 
          src={ten}
          alt="Ten"
          className="gallery-image"
        />  
      </div>
  )
}

export default Gallery