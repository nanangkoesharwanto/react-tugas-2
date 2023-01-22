import { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = ({ dataManager }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            handleShow();
        }
        setValidated(true);
    };

    return (
        <>
            <div className="login bg-blue" style={{ display: dataManager.login }}>
                <Container className="pt-5">
                    <Row>
                        <Col md={{ span: 8, offset: 2 }} style={{ textAlign: "center" }}>
                            <h1>Form Login</h1>
                            <h4>
                                Silahkan Masuk / Login menggunakan Akun Terdaftar Anda.
                            </h4>
                        </Col>
                    </Row>
                </Container>

                <Container className='mt-5 pb-5'>
                    <Row className="justify-content-md-center">
                        <Col md={{ span: 6 }}>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Ketik email anda" required />
                                    <Form.Control.Feedback type="invalid">
                                        Format email tidak valid.
                                    </Form.Control.Feedback>
                                    <Form.Text className="text-muted d-none">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required />
                                    <Form.Control.Feedback type="invalid">
                                        Password harus terisi.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3 d-none" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>

                                <Button className="mt-3" variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Success.</Modal.Title>
                </Modal.Header>
                <Modal.Body>Login berhasil, Silahkan pilih program studi yang diinginkan.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose} className="d-none">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Login;
