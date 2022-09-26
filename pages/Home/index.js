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
import { Col, Row } from 'antd';
import Card from 'react-bootstrap/Card';
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
    </div>

    <Row>
      <Col className='card1' span={8}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/e426702edf874b181aced1e2fa5c6cde.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Col>

      <Col className='card2' span={8}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../../public/Assest/02f73b4809ae455cbda8ef285c7a46f4.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      
      <Col className='card3' span={8}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../../public/Assest/5eKX.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row> 

    </div>
  )
}

export default index
