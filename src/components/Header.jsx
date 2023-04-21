import { React, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { GrFacebookOption } from "react-icons/gr";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import Contact from "./Contact";
import { TypeAnimation } from "react-type-animation";
export default function Header() {
  const [navigate, setnavigate] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 120) {
      setnavigate(true);
    } else {
      setnavigate(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <header id="home">
      <div className="intro intro-text">
        <Container>
          <Row>
            {navigate ? <Contact /> : undefined}

            <div id="second" className="col-md-7   order-md-2 ">
              <h1>
                Hi!
                <br></br>
                I'am Farah Chourou,
                <br></br>
                <TypeAnimation
                  sequence={[
                    1000,
                    " Full Stack Developer ", // Types 'One'
                    1000, // Waits 1s
                    "Software Engeering Student", // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    "Freelancer",
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={0}
                  style={{}}
                  speed={55}
                />
                {/*<MdComputer  color='white' size='80px' style={{position:"relative", bottom:"-15px"}} /> */}
              </h1>
              <p>Software engineering, addicted success and learning</p>
              <a href="#features" className="btn btn-custom btn-lg page-scroll">
                About Me
              </a>{" "}
            </div>
            <div className=" col-md-1   order-md-1">
              <div>
                <a href="https://www.facebook.com/fafou.ch.98/">
                  <GrFacebookOption className="social " />
                </a>
                <a href="https://www.linkedin.com/in/farah-chourou-68917b188/">
                  <RiLinkedinFill className="social " />
                </a>
                <a href="https://github.com/farah-chourou">
                  <IoLogoGithub className="social " />
                </a>
              </div>
            </div>

            <div className="  col-md-4  order-md-3 " id="third">
              <img
                src="img/pcavatar.png"
                width="99%"
                className="-responsive"
                alt=""
              />
            </div>
          </Row>
        </Container>
      </div>
    </header>
  );
}
