import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
  Grid,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import watch1 from "../../src/images-of-watch/watch1.jpeg";
import "../styles/stylesAboutPage.css";

const AboutUs = () => (
  <Card className="card">
    <CardContent className="cardContent">
      <Typography variant="h5" gutterBottom>
        About Watch World
      </Typography>
      <Typography variant="body1">
        Welcome to Watch World, where time meets art, technology, and luxury.
        Since our establishment, we specialize in providing innovative and
        elegant solutions for people who appreciate precision, design, and an
        uncompromising user experience.
      </Typography>
    </CardContent>
  </Card>
);

const OurVision = () => (
  <Card className="card">
    <CardContent className="cardContent">
      <Typography variant="h5" gutterBottom>
        Our Vision
      </Typography>
      <Typography variant="body1">
        Our vision is to lead the watch industry in Israel and worldwide,
        turning every watch into more than just a time-measuring tool, but into
        a piece of art that reflects personality and lifestyle. We strive to
        bring the most advanced and stylish watches while maintaining
        uncompromising quality and top-tier customer service.
      </Typography>
    </CardContent>
  </Card>
);

const OurProducts = () => (
  <Card className="card">
    <CardContent className="cardContent">
      <Typography variant="h5" gutterBottom>
        Our Products
      </Typography>
      <Typography variant="body1">
        We offer a wide range of watches for every purpose: luxury watches,
        sports watches, smart watches, and fashion watches. Each watch is
        carefully selected and made from the highest quality materials to ensure
        accuracy and durability over time. We are proud to offer watches from
        leading brands such as Rolex, Omega, Seiko, and more.
      </Typography>
    </CardContent>
  </Card>
);

const OurTeam = () => (
  <Card className="card">
    <CardContent className="cardContent">
      <Typography variant="h5" gutterBottom>
        Our Team
      </Typography>
      <Typography variant="body1">
        Our team consists of experts with extensive experience in the watch
        industry, dedicated to ensuring you find the perfect watch. We are here
        to accompany you at every stage of the purchasing process, providing
        professional and personal advice.
      </Typography>
    </CardContent>
  </Card>
);

const ContactUs = () => (
  <Card className="card">
    <CardContent className="cardContent">
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        We are always happy to hear from our customers. If you have any
        questions, comments, or feedback, please do not hesitate to contact us.
        You can reach us by phone at 03-1234567 or by email at
        info@watchworld.com.
      </Typography>
      <Box mt={2} display="flex" justifyContent="center" flexWrap="wrap">
        <IconButton
          className="iconButton"
          aria-label="WhatsApp"
          href="https://wa.me/your-number"
        >
          <WhatsAppIcon fontSize="large" />
        </IconButton>
        <IconButton
          className="iconButton"
          aria-label="Twitter"
          href="https://twitter.com/your-profile"
        >
          <TwitterIcon fontSize="large" />
        </IconButton>
        <IconButton
          className="iconButton"
          aria-label="Instagram"
          href="https://www.instagram.com/your-profile"
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
        <IconButton
          className="iconButton"
          aria-label="Waze"
          href="https://waze.com/ul?ll=32.0853,34.7818&navigate=yes"
        >
          <RoomIcon fontSize="large" />
        </IconButton>
        <IconButton
          className="iconButton"
          aria-label="Email"
          href="mailto:your-email@gmail.com"
        >
          <EmailIcon fontSize="large" />
        </IconButton>
      </Box>
    </CardContent>
  </Card>
);

const AboutPage = () => (
  <Container className="container">
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="carouselContainer"
    >
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src={watch1} alt="Watch 1" className="carouselImage" />
        </div>
        <div>
          <img src={watch1} alt="Watch 2" className="carouselImage" />
        </div>
        <div>
          <img src={watch1} alt="Watch 3" className="carouselImage" />
        </div>
      </Carousel>
    </Box>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <AboutUs />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OurVision />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OurProducts />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OurTeam />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ContactUs />
      </Grid>
    </Grid>
  </Container>
);

export default AboutPage;
