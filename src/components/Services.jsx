import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import {MdWebAsset} from "react-icons/md"
import {SlGameController } from "react-icons/sl"
import {MdDeveloperMode } from "react-icons/md"


export default function Services() {
  return (
    <div id="services" >
       <Container className='text-center'>
        <div className='section-title '>
          <h2>My Services</h2>
          <p>
           What I Do
          </p>
        </div>
        <Row>

        <Col md={4}>
                  {' '}
                  <div className="icon" > <MdWebAsset/></div>
                  <div className='service-desc'>
                    <h3>Web Development </h3>
                    <p> I can help you create the perfect responsive websites that are fast, easy to use, and built with best practices.  
                      With my expertise in full stack development, I can make something according to your needs.</p>
                  </div>
                </Col>
                <div className='col-md-4'>
                  <div className="icon" > <MdDeveloperMode/></div>
                  <div className='service-desc'>
                    <h3>App Development </h3>
                    <p></p>
                  </div>
                </div>


                <Col md={4}>
                  {' '}
                  <div className="icon" > <SlGameController/></div>

                  <div className='service-desc'>
                    <h3>Video Games Development &  3D modeling </h3>
                    <p></p>
                  </div>
                </Col>


           
        </Row>
      </Container>




    </div>
  )
}
