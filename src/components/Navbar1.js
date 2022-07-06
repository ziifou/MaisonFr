import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
// import homeIcon from "../assets/svg/homeIcon.svg";
import { ReactComponent as HomeIcon } from "../assets/svg/homeIcon.svg";

function Navbar1() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <HomeIcon
              alt=""
              width="30"
              height="30"
              fill="#ffffff"
              className="d-inline-block align-top"
            />{" "}
            MaisonFr
          </Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto px-5">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/offers">
            <Nav.Link>bon plan</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/profile">
            <Nav.Link>Profil</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
