import React from "react";
import { Row, Col } from "react-bootstrap";

export default function BootstrapGrids() {
  return (
    <div>
      <h2>Bootstrap</h2>
      <div id="wd-bs-grid-system">
        <h2>Grid system</h2>
        <div id="wd-bs-responsive-grids">
          <h2>Responsive grid system</h2>
          <Row>
            <Col xs={12} md={6} xl={3} className="bg-warning">
              <h3>Column A</h3> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iste quibusdam necessitatibus placeat a
              exercitationem. Ad aliquid ratione eum eaque doloremque
              dignissimos consequuntur facilis iste! Voluptatibus aliquam
              officia nisi eligendi quidem!
            </Col>
            <Col xs={12} md={6} xl={3} className="bg-primary text-white">
              <h3>Column B</h3> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iste quibusdam necessitatibus placeat a
              exercitationem. Ad aliquid ratione eum eaque doloremque
              dignissimos consequuntur facilis iste! Voluptatibus aliquam
              officia nisi eligendi quidem!
            </Col>
            <Col xs={12} md={6} xl={3} className="bg-danger text-white">
              <h3>Column C</h3> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iste quibusdam necessitatibus placeat a
              exercitationem. Ad aliquid ratione eum eaque doloremque
              dignissimos consequuntur facilis iste! Voluptatibus aliquam
              officia nisi eligendi quidem!
            </Col>
            <Col xs={12} md={6} xl={3} className="bg-success text-white">
              <h3>Column D</h3> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iste quibusdam necessitatibus placeat a
              exercitationem. Ad aliquid ratione eum eaque doloremque
              dignissimos consequuntur facilis iste! Voluptatibus aliquam
              officia nisi eligendi quidem!
            </Col>
          </Row>
        </div>

        <hr />
        <Row>
          <Col lg={4} className="bg-warning">
            <h3>One third</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            distinctio possimus, unde, maxime quo velit fuga assumenda est esse
            eos nobis optio, nostrum facilis? Rerum deleniti nemo deserunt
            commodi voluptas.
          </Col>
          <Col xs={8} className="bg-success text-white">
            <h3>Two thirds</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            distinctio possimus, unde, maxime quo velit fuga assumenda est esse
            eos nobis optio, nostrum facilis? Rerum deleniti nemo deserunt
            commodi voluptas.
          </Col>
        </Row>

        <hr />
        <Row>
          <Col className="bg-danger text-white">
            <h3>Left half</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quae similique suscipit, saepe totam aliquid consequatur dignissimos
            voluptate alias facilis, earum dolor dicta necessitatibus ad quasi,
            quis veritatis molestiae. Aut.
          </Col>
          <Col className="bg-info text-white">
            <h3>Right half</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quae similique suscipit, saepe totam aliquid consequatur dignissimos
            voluptate alias facilis, earum dolor dicta necessitatibus ad quasi,
            quis veritatis molestiae. Aut.
          </Col>
        </Row>
      </div>
    </div>
  );
}
