import { Navbar, Container, Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Bank from "./bank.png";

export default function NavBar() {
  return (
    <>
      <Navbar bg="" variant="light" expand="lg" class="navbar">
        <Container>
          <Card style={{ width: "75px" }}>
            <Card.Img variant="top" src={Bank} />
          </Card>
          &nbsp;&nbsp;&nbsp;
          <h1 class="head">Federal Reserve Bank of Chicago</h1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div>
              <Nav className="me-auto">
                <Nav.Link
                  className="navbar-brand"
                  activeClassName="navbar-brand--active"
                  href="#/"
                  title=" Home Page"
                >
                  {" "}
                  Home{" "}
                </Nav.Link>
                <Nav.Link
                  className="navbar-brand"
                  title="Create your Account"
                  href="#/CreateAccount/"
                >
                  {" "}
                  CreateAccount{" "}
                </Nav.Link>
                <Nav.Link
                  className="navbar-brand"
                  title="Deposit in your Account"
                  href="#/Deposit/"
                >
                  Deposit{" "}
                </Nav.Link>
                <Nav.Link
                  className="navbar-brand"
                  title="Withdraw from your Account"
                  href="#/Withdraw/"
                >
                  WithDraw{" "}
                </Nav.Link>
                <Nav.Link
                  className="navbar-brand"
                  title="Track your Transactions"
                  href="#/AllData/"
                >
                  All Data
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
