import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Head from "next/head";
import Image from "next/image";
import slide1 from "/public/slide1.png";
import slide2 from "/public/slide2.png";
import slide3 from "/public/slide3.png";
import slide4 from "/public/slide4.png";
import Cardimage1 from "/public/coding.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Navigation from "../Component/Navigation";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

const index = () => {
  return (
    <div>
      <div>
        <Navigation />
        <div className="overlay"></div>
        <div className="main-screen">
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
          <Button className="btn1" size="lg" variant="outline-primary">
            Start for free
          </Button>{" "}
        </div>
      </div>

      <div className="cardbox1">
        <Container>
          <Row>
            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" />
                  <Image src={Cardimage1} alt="Fourth slide" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Col>

            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" />
                  <Image src={Cardimage1} alt="Fourth slide" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Col>

            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" />
                  <Image src={Cardimage1} alt="Fourth slide" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="ide">
        <h1 className="hd1">Move faster</h1>
        <h1>
          with intuitive
          <br />
          Codespace IDE
        </h1>
        <p>
          MUI offers a comprehensive suite of UI tools to help you ship new
          features faster. Start with Material UI, our fully-loaded component
          library, or bring your own design system to our production-ready
          components.
        </p>

        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default index;
