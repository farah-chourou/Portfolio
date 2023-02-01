import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Card from 'react-bootstrap/Card';
import {IoLogoGithub} from "react-icons/io"

export default function Work() {



  const slideImages = [
    {
      url: "img/work/collectUS/kgame1.png",
    },
    {
      url: "img/work/collectUS/kgame2.png",
    },
    {
      url: "img/work/collectUS/kgame3.png",
    },
    {
      url: "img/work/collectUS/kgame4.png",
    },
    {
      url: "img/work/collectUS/kgame5.png",
    },
    {
      url: "img/work/collectUS/kgame6.png",
    },
    {
      url: "img/work/collectUS/kgame7.png",
    },
  ];





  return (
    <div id="work" >
      <Container className=''>
      <div className=' section-title text-center '>
        <h2>My work</h2>
         <p> What i did</p>
      </div>
   
     <Row className="justify-content-around  h-40">
         <Card style={{ width: '20rem' }}>
         <div className="card-img-top pt-2 ">


         <Fade className=" ">
        {slideImages.map((fadeImage, index) => (
          <div className="each-fade h-25" key={index}>
              <img src={fadeImage.url} width="100%" />
          </div>
        ))}
      </Fade>
      </div>

           <Card.Body>
          <Card.Title>Collect us</Card.Title>
          <Card.Text>
          2D/3D advertising game for Kinder's products. The player is found lost in a maze and should escape it. to solve the maze you need to collect special eggs located at the end of levels one and two.
          </Card.Text>

          </Card.Body>
          <Card.Footer className="text-center">

          <Card.Link href="#" className="text-dark "> <IoLogoGithub/></Card.Link>

          </Card.Footer>

       </Card>
       

         <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="img/pcavatar.png" />
           <Card.Body>
          <Card.Title>Date Night</Card.Title>
          <Card.Text>
          2D game inspired by the Titanic movie, Jack and rose need to collaborate together in order to reach a date appointment. thus, they should clear the way for each other.
          </Card.Text>

          </Card.Body>
          <Card.Footer className="text-center">

          <Card.Link href="#" className="text-dark "> <IoLogoGithub/></Card.Link>

          </Card.Footer>

       </Card>

         <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="img/pcavatar.png" />
           <Card.Body>
          <Card.Title>CV AR</Card.Title>
          <Card.Text>
          Curriculum vitae and digital portfolio introduced in augmented reality,
          allowing me to increase the impact of my applications to recruiters.
          </Card.Text>

          </Card.Body>
          <Card.Footer className="text-center">

          <Card.Link href="#" className="text-dark "> <IoLogoGithub/></Card.Link>

          </Card.Footer>

       </Card>

     </Row>

     <Row className="justify-content-around  h-40 mt-4">
         <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="img/pcavatar.png" />
           <Card.Body>
          <Card.Title>Lego scene in 3D.</Card.Title>
          <Card.Text>
          2D/3D advertising game for Kinder's products. The player is found lost in a maze and should escape it. to solve the maze you need to collect special eggs located at the end of levels one and two.
          </Card.Text>

          </Card.Body>
          <Card.Footer className="text-center">

          <Card.Link href="#" className="text-dark "> <IoLogoGithub/></Card.Link>

          </Card.Footer>

       </Card>
       

         <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="img/pcavatar.png" />
           <Card.Body>
          <Card.Title>Web application </Card.Title>
          <Card.Text>
          A web-based application for managing, processing reports submitted for medical advice through a workflow notification. It is a request for communication and exchange of the due diligence bulletin between two stakeholders, the insurance and the host company. the patient, may take reimbursement of the part of the insurance also the application contains other part than the management of the employer.          </Card.Text>

          </Card.Body>
          <Card.Footer className="text-center">

          <Card.Link href="#" className="text-dark "> <IoLogoGithub/></Card.Link>

          </Card.Footer>

       </Card>

         <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="img/pcavatar.png" />
           <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          Curriculum vitae and digital portfolio introduced in augmented reality,
          allowing me to increase the impact of my applications to recruiters.
          </Card.Text>

          </Card.Body>
          <Card.Footer className="text-center">

          <Card.Link href="#" className="text-dark "> <IoLogoGithub/></Card.Link>

          </Card.Footer>

       </Card>

     </Row>


      </Container>
      
      
      
      
      
    
    
    
    </div>





  )
}
