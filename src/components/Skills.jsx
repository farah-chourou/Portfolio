import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

function Skills() {
  return (
    <div id='skills' className='text-center'>



    <Container className='text-center'>
      <div className=' section-title  '>
        <h2>My Skills</h2>
         <p> What I know</p>
      </div>
      <Row className="justify-content-evenly">
              <Col xs={11} md={3} className="skill">
                <i ></i>
                <h5>Coding Skills </h5>
                <Row className='justify-content-around pt-2 h-40 '> 
                  <Col md={3} xs={3} className="border border-dark rounded p-2  m-1 icon-skill " style={{heigh:70}}>
                    <img src='img/skills/spring.png' alt="spring boot" width="80%" ></img>
                  </Col>
                  <Col md={3} xs={3}className="border border-dark rounded p-2 m-1 icon-skill">
                    <img src='img/skills/node.png' alt="spring boot" width="80%" ></img>
                  </Col>
                  <Col md={3}xs={3} className="border border-dark rounded p-2 m-1 icon-skill ">
                    <img src='img/skills/react.png' alt="spring boot" width="80%" ></img>
                  </Col>
                </Row>
                <Row className='justify-content-around pt-2 h-40'> 
                  <Col md={3} xs={3} className="border border-dark rounded p-2  m-1 icon-skill" style={{heigh:70}}>
                    <img src='img/skills/flutter.png' alt="spring boot" width="80%" ></img>
                  </Col>

                  <Col md={3} xs={3}className="border border-dark rounded p-2 m-1 icon-skill">
                    <img src='img/skills/redux.png' alt="spring boot" width="80%" ></img>
                  </Col>
                  <Col md={3}xs={3} className="border border-dark rounded p-2 m-1 icon-skill">
                    <img src='img/skills/bootstrap.png' alt="spring boot" width="80%" ></img>
                  </Col>
                </Row>
                <Row className='justify-content-around pt-2 h-40'> 
                  <Col md={3} xs={3} className="border border-dark rounded p-2  m-1 icon-skill" style={{heigh:70}}>
                    <img src='img/skills/js.png' alt="spring boot" width="80%" ></img>
                  </Col>

                  <Col md={3} xs={3}className="border border-dark rounded p-2 m-1 icon-skill">
                    <img src='img/skills/java.png' alt="spring boot" width="60%" ></img>
                  </Col>
                </Row>


              </Col>


              <Col xs={11} md={3}  className=' skill'>
                <i ></i>
                <h5>Database Skills</h5>
                <Row className='justify-content-around pt-2 h-40'> 
                  <Col md={3} xs={3} className="border border-dark rounded p-2  m-1 icon-skill" style={{heigh:70}}>
                    <img src='img/skills/mongo.png' alt="spring boot" width="110%" ></img>
                  </Col>
                  <Col md={3} xs={3}className="border border-dark rounded p-2 m-1 icon-skill">
                    <img src='img/skills/mysql.png' alt="spring boot" width="100%" ></img>
                  </Col>
           
                </Row>
               </Col>



              <Col xs={11} md={3} className=' skill'>
                <h5>Tools</h5>
                <Row className='justify-content-around pt-2 h-40'> 
                  <Col md={3} xs={3} className="border border-dark rounded p-2  m-1 icon-skill" style={{heigh:70}}>
                    <img src='img/skills/unity.png' alt="spring boot" width="80%" ></img>
                  </Col>
                  <Col md={3} xs={3}className="border border-dark rounded p-2 m-1 icon-skill">
                    <img src='img/skills/maya.png' alt="spring boot" width="80%" ></img>
                  </Col>
                  <Col md={3} xs={3}className="border border-dark rounded p-2 m-1 icon-skill">
                    <img src='img/skills/ps.png' alt="spring boot" width="80%" ></img>
                  </Col>
           
                </Row>
              </Col>
         
      </Row>
    </Container>
  </div>
  )
}

export default Skills