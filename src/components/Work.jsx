import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { IoLogoGithub } from "react-icons/io";
import data from "./data/projectsData.json";
import Project from "./Project";
export default function Work() {
  return (
    <div id="work">
      <Container className="">
        <div className=" section-title text-center ">
          <h2>My work</h2>
          <p> What i did</p>
        </div>
        <Row className=" justify-content-around">
          <Project />
        </Row>
      </Container>
    </div>
  );
}
