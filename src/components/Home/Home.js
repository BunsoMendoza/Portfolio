import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Trees.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">

        <Container className="home-content">
          <Row>
            <div style={{ textAlign: "center" }}>
              <Type />
            </div>
          </Row>
         

         
        
        
        </Container> 
        <Row>
        <Home2 />
        </Row>
      </Container>
      
      


    </section>
  );
}

export default Home;
