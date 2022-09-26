import Head from 'next/head'
import Image from 'next/image'
import slide1 from "/public/slide1.png";
import slide2 from "/public/slide2.png";
import slide3 from "/public/slide3.png";
import slide4 from "/public/slide4.png";
// import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Navigation from "../Component/Navigation";
import Button from 'react-bootstrap/Button';
const index = () => {
  return (
    <div>
        <div>
      <Navigation />
      <div className='overlay'></div>
      <div className='main-screen'>
      <Carousel>
          <Carousel.Item interval={2250}>
            <Image src={slide1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <Image src={slide2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={2750}>
            <Image src={slide3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <Image src={slide4} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
        <Button className='btn1' size='lg' variant="outline-primary">Start for free</Button>{' '}
      </div>

      {/* <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Built on
          <span className={styles.logo}>
            <Image src="/replit.svg" alt="Replit Logo" width={20} height={18} />
          </span>
          Sayed Tabish
        </a>
      </footer>  */}
    </div>
    </div>
  )
}

export default index
