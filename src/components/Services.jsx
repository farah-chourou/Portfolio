import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { MdWebAsset } from "react-icons/md";
import { SlGameController } from "react-icons/sl";
import { MdDeveloperMode } from "react-icons/md";
import { AiOutlineLaptop } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
export default function Services() {
  return (
    <div id="services">
      <Container className="text-center">
        <div className="section-title ">
          <h2>My Services</h2>
          <p>What i can offer</p>
        </div>
        <Row>
          <Col md={4} className="service">
            {" "}
            <div className="icon">
              {" "}
              <FaLaptopCode />
            </div>
            <div className="service-desc">
              <h3>Web Development </h3>
              <p>
                {" "}
                I can help you create the perfect responsive websites that are
                fast, easy to use, and built with best practices. With my
                expertise in full stack development, I can make something
                according to your needs.
              </p>
            </div>
          </Col>
          <Col md={4} className="service">
            <div className="icon shadow">
              {" "}
              <MdDeveloperMode />
            </div>
            <div className="service-desc">
              <h3>Mobile Development </h3>
              <p>
                {" "}
                I build good looking and professional mobile applications for
                both Android and iOS.
              </p>
            </div>
          </Col>

          <Col md={4} className="service">
            {" "}
            <div className="icon">
              <AiOutlineLaptop />
            </div>
            <div className="service-desc">
              <h3>Custom software</h3>
              <p>
                I build good looking and professional mobile applications for
                both Android and iOS.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
