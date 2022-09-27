import Navigation from "../Component/Navigation";
import Link from 'next/link';
import styles from "../../styles/practice.module.css";
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "/public/slide1.png";
import slide2 from "/public/slide2.png";
import slide3 from "/public/slide3.png";
import slide4 from "/public/slide4.png";
import Image from "next/image";

const Practice = () => {
  return (
    <>
    <Navigation/>
    <div  className={styles.Carousel}>
    <Carousel autoplay>
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

    </div>
    </>
  );
};

export default Practice;