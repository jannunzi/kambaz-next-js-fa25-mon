import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { CiBeaker1 } from "react-icons/ci";
import { FaBookDead, FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
export default function KambazNavigation() {
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0  bg-black z-2"
      style={{ width: "140px" }}
    >
      <ListGroupItem className="bg-black text-danger border-0">
        Northeastern
      </ListGroupItem>
      <ListGroupItem
        as={Link}
        href="/Account"
        className="bg-white text-danger text-center border-0"
      >
        <FaRegUserCircle className="fs-1" /> <br />
        Account
      </ListGroupItem>
      <ListGroupItem
        as={Link}
        href="/Dashboard"
        className="bg-black text-white text-center border-0"
      >
        <MdSpaceDashboard className="fs-1 text-danger" /> <br /> Dashboard
      </ListGroupItem>
      <ListGroupItem
        as={Link}
        href="/Courses"
        className="bg-black text-white text-center border-0"
      >
        <FaBookDead className="fs-1 text-danger" /> <br /> Courses
      </ListGroupItem>
      <ListGroupItem
        as={Link}
        href="/Calendar"
        className="bg-black text-white text-center border-0"
      >
        <FaCalendarAlt className="fs-1 text-danger" /> <br /> Calendar
      </ListGroupItem>
      <ListGroupItem
        as={Link}
        href="/Inbox"
        className="bg-black text-white text-center border-0"
      >
        <FaRegUserCircle className="fs-1 text-danger" /> <br /> Inbox
      </ListGroupItem>
      <ListGroupItem
        as={Link}
        href="/Labs"
        className="bg-black text-white text-center border-0"
      >
        <CiBeaker1 className="fs-1 text-danger" /> <br />
        Labs
      </ListGroupItem>
    </ListGroup>
  );
}
