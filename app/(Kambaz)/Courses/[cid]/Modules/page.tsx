import { ListGroupItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/esm/ListGroup";

export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ListGroup className="rounded-0">
        <ListGroupItem
          className="wd-module
                    p-0 mb-5 fs-5 border-gray"
        >
          <div className="wd-title p-3 ps-2 bg-secondary">Week 1</div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LESSON 1
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LESSON 2
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
        <ListGroupItem
          className="wd-module
                               p-0 mb-5 fs-5 border-gray"
        >
          <div className="wd-title p-3 ps-2 bg-secondary">Week 2</div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LESSON 1{" "}
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LESSON 2{" "}
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
