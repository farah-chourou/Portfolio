import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Skills() {
  return (
    <div id="skills" className="text-center">
      <Container className="text-center">
        <div className=" section-title  ">
          <h2>My Skills</h2>
          <p> What I know</p>
        </div>
        <div class="d-flex bd-highlight mb-3">
          <div class="p-1 bd-highlight">
            {" "}
            <img
              src="img/skills/spring.png"
              alt="spring boot"
              width="40%"
            ></img>
          </div>
          <div class="p-1 bd-highlight">
            {" "}
            <img src="img/skills/node.png" alt="spring boot" width="40%"></img>
          </div>
          <div class="p-1 bd-highlight">
            {" "}
            <img src="img/skills/react.png" alt="spring boot" width="40%"></img>
          </div>
          <div class="p-1 bd-highlight">
            {" "}
            <img
              src="img/skills/flutter.png"
              alt="spring boot"
              width="40%"
            ></img>
          </div>
          <div class="p-1 bd-highlight">
            {" "}
            <img
              src="img/skills/android.png"
              alt="spring boot"
              width="30%"
            ></img>
          </div>
          <div class="p-1 bd-highlight">
            {" "}
            <img src="img/skills/redux.png" alt="spring boot" width="40%"></img>
          </div>
          <div class="p-1 bd-highlight">
            {" "}
            <img src="img/skills/js.png" alt="spring boot" width="40%"></img>
          </div>
          <div class="p-1 bd-highlight">
            {" "}
            <img src="img/skills/java.png" alt="spring boot" width="40%"></img>
          </div>
        </div>

        <div class="d-flex bd-highlight mb-3">
          <div class="p-1 bd-highlight">
            {" "}
            <img src="img/skills/mongo.png" alt="spring boot" width="20%"></img>
          </div>
          <div class="p-1 bd-highlight">
            {" "}
            <img src="img/skills/fireBase.png" alt="FireBase" width="40%"></img>
          </div>
          <div class="p-1 bd-highlight">
            {" "}
            <img src="img/skills/mysql.png" alt="Mysql" width="30%"></img>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Skills;
