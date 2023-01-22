import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import logo from "../../logo.svg";
  
function Footer() {
    return (
        <div className="footer">
            <Container className='py-5'>
                <Row>
                    <Col className="col-footer" md={6}>
                        <img
                            alt=""
                            src={logo}
                            width="105"
                            height="105"
                            className="d-inline-block align-top img-nav"
                        />
                        <h3>License</h3>
                        MIT © Nanang K.
                        <br />
                        Copyright © 2023 Nanang K., Inc.
                        <br /><br />
                        <FontAwesomeIcon icon={faEnvelope} /> <a className='footer-link' href='installation'>nanangkoesharwanto@gmail.com</a>
                        <br />
                        <FontAwesomeIcon icon={faPhone} /> <a className='footer-link' href='installation'>081217357535</a>
                    </Col>
                    <Col className="col-footer">
                        <b>Docs</b>
                        <ul className="no-bullets">
                            <li className='mt-2'><a className='footer-link' href='installation'>Installation</a></li>
                            <li className='mt-2'><a className='footer-link' href='installation'>Main Concept</a></li>
                            <li className='mt-2'><a className='footer-link' href='installation'>API Reference</a></li>
                            <li className='mt-2'><a className='footer-link' href='installation'>Hooks</a></li>
                            <li className='mt-2'><a className='footer-link' href='installation'>Contributing</a></li>
                            <li className='mt-2'><a className='footer-link' href='installation'>Tutorial</a></li>
                            <li className='mt-2'><a className='footer-link' href='installation'>Community Resource</a></li>
                        </ul>
                    </Col>
                    <Col className="col-footer">
                        <ul className="no-bullets">
                            <li className=''><a className='footer-link' href='installation'>About</a></li>
                            <li className='mt-2'><a className='footer-link' href='installation'>Contact</a></li>
                            <li className='mt-2'><a className='footer-link' href='installation'>Policy</a></li>
                            <li className='mt-2'><a className='footer-link' href='installation'>Privacy</a></li>
                            <li className='mt-2'><a className='footer-link' href='installation'>FAQ</a></li>
                            <li className='mt-2'><a className='footer-link' href='installation'>Term & Condition</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;