import { Badge, Carousel, Col, Container, Row, Table } from "react-bootstrap";
import first from "../../slide-1.jpg";
import second from "../../slide-2.jpg";
import third from "../../slide-3.jpg";

const Profile = ({ dataManager }) => {
    return (
        <>
            <div className="profile bg-blue" style={{ display: dataManager.profile }}>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={first} alt="First slide" />
                        <Carousel.Caption>
                            <h3>Jadi expert bersama edspert.id</h3>
                            <p>
                                Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
                                bidangnya, untuk siapkan karir impian anda.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={second} alt="Second slide" />
                        <Carousel.Caption>
                            <h3>Mentor Expert Dibidangnya</h3>
                            <p>
                                Para mentor terpilih di edspert.id adalah para mentor
                                berpengalaman yang siap membimbing kamu.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={third} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Materi dan Kurikulum yang Relevan</h3>
                            <p>
                                Kurikulum kelas di edspert selalu di perbarui dan di sesuaikan
                                dengan kebutuhan industri saat ini.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Container className="pt-5">
                    <Row>
                        <Col md={{ span: 8, offset: 2 }} style={{ textAlign: "center" }}>
                            <h1>Kenali program dari Edspert</h1>
                            <h4>
                                Edspert hadir dengan format pembelajaran yang kami siapkan untuk menunjang potensi-potensi terbaik kalian.
                            </h4>
                        </Col>
                    </Row>
                </Container>

                <Container className='mt-5 pb-5'>
                    <Row className="justify-content-md-center">
                        <Col md={{ span: 10 }}>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Program Studi</th>
                                        <th>Kategori</th>
                                        <th>Periode</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>ReactJS <Badge bg="danger">
                                            Hot
                                        </Badge></td>
                                        <td>Frontend</td>
                                        <td>10 kali pertemuan</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>VueJS</td>
                                        <td>Frontend</td>
                                        <td>8 kali pertemuan</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>NodeJS</td>
                                        <td>Frontend</td>
                                        <td>12 kali pertemuan</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Laravel <Badge bg="primary">
                                            Best Price
                                        </Badge></td>
                                        <td>Backend</td>
                                        <td>12 kali pertemuan</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Phyton</td>
                                        <td>Backend</td>
                                        <td>10 kali pertemuan</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Go</td>
                                        <td>Backend</td>
                                        <td>6 kali pertemuan</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Profile;
