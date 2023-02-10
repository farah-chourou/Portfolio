import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import {HiOutlineDownload} from "react-icons/hi"
import {TiEye} from "react-icons/ti"
import IconButton from '@mui/material/IconButton';
import {BsCheck} from 'react-icons/bs'
export default function About() {
  return (
    <div id="about">
    <Container>
      <Row>
        <Col md={6} xs={12}>
        <img src="img/avatar1.png" className="-responsive" alt="" />{" "}

        
        </Col>
 
        <Col md={6} xs={12}>
        <div className="about-text">
              <h2>About Me</h2>

                Hi there! I'am <b>Chourou Farah </b>
             <br></br>
             A passionate <b> programmer</b>, I am a <b> Full Stack Web Developer</b> located in Tunisia . I'am software engeering student in Higher Institute of Arts Manouba Multimedia (ISAMM).
             <br></br>
             I love learning about  <b> new technologies</b>, what problems are they solving and How can I use them to build better and scalable products.
              <h3 style={{marginTop:20}}>Why Choose Me?</h3>
              <Row>
                <Col md={6} xs={12} className="col-sm-6 " >
                  <ul>
                   
                          <li > <BsCheck className='icon-about'/> Well-organised person</li>
                          <li > <BsCheck className='icon-about'/> Problem solver</li>
                          <li > <BsCheck className='icon-about'/>Employee with high attention to detail</li>

                   
                  </ul>
                </Col>
                <Col md={6} xs={12}  className="col-sm-6 ">
                  <ul>
                   
                          <li>  <BsCheck className='icon-about'/>Creative person</li>
                          <li> <BsCheck className='icon-about'/> Punctual person</li>
                          <li>  <BsCheck className='icon-about'/>Independent</li>

                  </ul>
                </Col>
              </Row>

             <Row> 

             <h3 style={{textAlign: "center", marginTop:10}}> 

              <IconButton size="large">
              <a href="./img/CV.pdf"> <HiOutlineDownload size="26px" color="gray" /></a>
              </IconButton>
              <IconButton size="large">
              <TiEye size="26px" color="gray" />
              </IconButton>
               curriculum vitae
              </h3>
              


             </Row>
           
           
            </div>
          
        
        </Col>
      </Row>
    </Container>
    </div>
  )
}