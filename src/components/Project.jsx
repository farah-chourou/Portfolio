import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { IoLogoGithub } from "react-icons/io";
import data from "./data/projectsData.json";

function Project() {
  const data = [
    {
      id: 1,
      name: " 2D/3D Game Collect US",
      description:
        " 2D/3D advertising game for Kinder's products. The player is foundlost in a maze and should escape it. to solve the maze you need to collect special eggs located at the end of levels one and two.",
      url: "img/work/collectUS/blue.png",
      technologie: ["Unity", "C#"],
    },
    {
      id: 2,
      name: " 2D Game",
      description: "jjjjj",
      technologie: ["farah"],
    },
  ];

  return (
    <>
      {data.map((item) => (
        <Col
          md={3}
          className="border shadow-lg m-3 rounded"
          style={{
            height: 420,
            borderRaduis: "80%",
            overflow: "hidden",
          }}
        >
          {console.log(data)}
          <div class="d-flex flex-column bd-highlight mb-3">
            <div class="p-2 bd-highlight mt-2">
              <h5> {item.name} </h5>
            </div>
            <div class=" bd-highlight ">
              <Image src={item.url} height={180} />
            </div>
            <div class="p-2 bd-highlight"> {item.description}</div>
            <div class="p-2 bd-highlight">
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
      ))}
    </>
  );
}

export default Project;
