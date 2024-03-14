import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "../Component/Navbar";
import Video from "../Component/Video";
import Content from "../Component/Content";
import Management from "../Component/Management";
import Header from "../Component/Header";
import Middle from "../Component/Middle";
import Bottom from "../Component/Bottom";

const HomePage = () => {
  return (
    <Container maxW="container.xl">
      <Container id="navdiv">
        <Navbar />
      </Container>
      <Container>
        <Header />
        <Video />
        <Content />
        <Management />
        <Container>
          <Middle />
          <Bottom />
        </Container>
      </Container>
    </Container>
  );
};

export default HomePage;
