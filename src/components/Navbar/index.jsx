import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";

const NavbarMenu = ({ dataManager }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showright, setShowRight] = useState(false);
  const handleCloseRight = () => setShowRight(false);
  const handleShowRight = () => setShowRight(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            href="#home"
            onClick={() => dataManager.setDisplay("home")}
          >
            <img
              alt=""
              src="https://edspert.id/assets/img/logo_Edspert.png"
              width="165"
              height="35"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#about"
                onClick={() => dataManager.setDisplay("about")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#profile"
                onClick={() => dataManager.setDisplay("profile")}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                href="#login"
                onClick={() => dataManager.setDisplay("login")}
              >
                Login
              </Nav.Link>
              <Nav.Link
                href="#register"
                onClick={() => dataManager.setDisplay("register")}
              >
                Register
              </Nav.Link>

              <NavDropdown title="Sidebar" id="basic-nav-dropdown">
                <NavDropdown.Item href="#left" onClick={handleShow}>Left</NavDropdown.Item>
                <NavDropdown.Item href="#right" onClick={handleShowRight}>Right</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Type Keyword ..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Kata Bijak</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ol>
            <li>
              Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah
              berlalu dan yakinlah semua akan baik-baik saja.
            </li>
            <li className="mt-2">
              Setiap detik sangatlah berharga karena waktu mengetahui banyak
              hal, termasuk rahasia hati.
            </li>
            <li className="mt-2">
              Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah
              sendiri.
            </li>
            <li className="mt-2">
              Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.
            </li>
            <li className="mt-2">
              Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan
              berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang
              baru dengan harapan yang lebih baik dari sebelumnya.
            </li>
            <li className="mt-2">
              Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan
              bersyukurlah yang akan menjadikan hidup kita bahagia.
            </li>
          </ol>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={showright} onHide={handleCloseRight} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Tertawa Sejenak</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ol>
            <li>
              Berenang jauh para ikan
              <br />
              Mereka bebas hatinya senang
              <br />
              Badan kurus kurang makan
              <br />
              Kalau ditiup goyang-goyang
            </li>
            <li className="mt-2">
              Jalan-jalan ke pinggir empang
              <br />
              Nemu katak di pinggir empang
              <br />
              Hati siapa tak bimbang
              <br />
              Kamu botak minta dikepang
            </li>
            <li className="mt-2">
              Tetangga baru namanya Rahmat
              <br />
              Punya istri namanya Cua
              <br />
              Kakek cerita terlalu semangat
              <br />
              Gigi palsunya copot semua
            </li>
          </ol>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarMenu;
