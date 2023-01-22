import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";

const Register = ({ dataManager }) => {
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
        else {
            handleShow();
        }
        setValidated(true);
    };

    return (
        <>
            <div
                className="register bg-blue"
                style={{ display: dataManager.register }}
            >
                <Container className="pt-5">
                    <Row>
                        <Col md={{ span: 8, offset: 2 }} style={{ textAlign: "center" }}>
                            <h1>Form Register</h1>
                            <h4>Silahkan Daftarkan Akun Anda.</h4>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5 pb-5">
                    <Row className="justify-content-md-center">
                        <Col md={{ span: 6 }}>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formBasicName">
                                        <Form.Label>Nama Lengkap</Form.Label>
                                        <Form.Control type="text" placeholder="" required />
                                        <Form.Control.Feedback type="invalid">
                                            Nama lengkap harus terisi.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formBasicPhone">
                                        <Form.Label>No. Telp.</Form.Label>
                                        <Form.Control type="text" placeholder="" required />
                                        <Form.Control.Feedback type="invalid">
                                            No. Telp. harus terisi.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formBasicAddress">
                                    <Form.Label>Alamat Lengkap</Form.Label>
                                    <Form.Control as="textarea" rows={1} required />
                                    <Form.Control.Feedback type="invalid">
                                        Alamat harus terisi.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="" required />
                                    <Form.Control.Feedback type="invalid">
                                        Email harus terisi.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="" required />
                                        <Form.Control.Feedback type="invalid">
                                            Password harus terisi.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        controlId="formBasicPasswordConfirmation"
                                    >
                                        <Form.Label>Ketik Ulang Password</Form.Label>
                                        <Form.Control type="password" placeholder="" required />
                                        <Form.Control.Feedback type="invalid">
                                            Konfirmasi Password harus terisi.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Foto</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>

                                <Form.Group controlId="formPendidikan" className="mb-3">
                                    <Form.Label>Pendidikan Terakhir</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option value="1">Diploma</option>
                                        <option value="2">Sarjana (S1)</option>
                                        <option value="3">Sarjana (S2)</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group controlId="formJenisKelamin" className="mb-3">
                                    <Form.Label>Jenis Kelamin</Form.Label>
                                    <br />
                                    <Form.Check
                                        inline
                                        name="jenis_kelamin"
                                        type="radio"
                                        id="pria"
                                        label="Pria"
                                    />
                                    <Form.Check
                                        inline
                                        name="jenis_kelamin"
                                        type="radio"
                                        id="wanita"
                                        label="Wanita"
                                    />
                                </Form.Group>

                                <Button className="mt-3" variant="primary" type="submit">
                                    Register
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
                <Modal.Body>Register berhasil, Silahkan cek email anda, untuk verifikasi akun.</Modal.Body>
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

export default Register;
