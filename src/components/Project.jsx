import React, { useEffect, useState } from "react";

import {
  Container,
  Row,
  Col,
  Image,
  OverlayTrigger,
  Modal,
  Button,
} from "react-bootstrap";
import {
  IoLogoGithub,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import data from "./data/projectsData.json";

function Project() {
  return (
    <>
      {data.map((item) => (
        <ProjectItem key={item.id} item={item} />
      ))}
    </>
  );
}

function ProjectItem({ item }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

  const handleImageClick = (imageUrl) => {
    setModalImageUrl(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handlePrevImage = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  };

  const handleNextImage = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  return (
    <>
      <Col
        md={3}
        className="border  m-1 mt-4  project"
        style={{
          height: 440,
          borderRaduis: "80%",
          overflow: "hidden",
        }}
      >
        {console.log(data)}
        <div class="d-flex flex-column bd-highlight mb-3 align-item">
          <div class="p-2 bd-highlight mt-2">
            <h6> {item.name} </h6>
          </div>
          <div class=" bd-highlight text-center  ">
            <Image
              src={item.url[currentIndex]}
              height={150}
              width={280}
              onClick={() => handleImageClick(item.url[currentIndex])}
              style={{ cursor: "pointer", borderRadius: 10 }}
            />
          </div>
          <div class="p-2" style={{ height: "150px" }}>
            {" "}
            {item.description}
          </div>
          <div class="p-2 bd-highlight mt-auto">
            <div class="d-flex justify-content-start">
              {item.technologie.map((a) => (
                <div className="tech"> {a}</div>
              ))}
              <div class="ms-auto bd-highlight ">
                {" "}
                <IoLogoGithub size={25} />
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body style={{ padding: 0 }}>
          <Image src={modalImageUrl} fluid />
        </Modal.Body>
      </Modal>{" "}
    </>
  );
}

export default Project;
