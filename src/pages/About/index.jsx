import Hero from "../../components/Hero/Hero";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Accordion } from "react-bootstrap";

const About = ({ dataManager }) => {
    return (
        <>
            <div className="about bg-blue" style={{ display: dataManager.about }}>
                <Hero />

                <Container className="pt-5">
                    <Row className="justify-content-md-center">
                        <Col md={{ span: 10 }} style={{ textAlign: "center" }}>
                            <h1>Kenapa memilih Edspert?</h1>
                            <h4>
                                Edspert mencetak talenta terbaik dengan menghadirkan kelas-kelas
                                pembelajaran berkualitas.
                            </h4>
                        </Col>
                    </Row>
                </Container>

                <Container className="pt-5">
                    <Row className="justify-content-md-center">
                        <Col className="mb-5">
                            <Card style={{ width: "15rem", minHeight: "450px" }}>
                                <Card.Img
                                    variant="top"
                                    src="https://edspert.id/assets/img/keunggulan/MentorExpoert.png"
                                />
                                <Card.Body style={{ textAlign: "center" }}>
                                    <Card.Title style={{ minHeight: "55px", fontWeight: "bold" }}>
                                        Mentor Expert Dibidangnya
                                    </Card.Title>
                                    <Card.Text>
                                        Para mentor terpilih di edspert.id adalah para mentor
                                        berpengalaman yang siap membimbing kamu.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-5">
                            <Card style={{ width: "15rem", minHeight: "450px" }}>
                                <Card.Img
                                    variant="top"
                                    src="https://edspert.id/assets/img/keunggulan/MateriKurikulum.png"
                                />
                                <Card.Body style={{ textAlign: "center" }}>
                                    <Card.Title style={{ minHeight: "55px", fontWeight: "bold" }}>
                                        Materi dan Kurikulum yang Relevan
                                    </Card.Title>
                                    <Card.Text>
                                        Kurikulum kelas di edspert selalu di perbarui dan di
                                        sesuaikan dengan kebutuhan industri saat ini.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-5">
                            <Card style={{ width: "15rem", minHeight: "450px" }}>
                                <Card.Img
                                    variant="top"
                                    src="https://edspert.id/assets/img/keunggulan/project-based.png"
                                />
                                <Card.Body style={{ textAlign: "center" }}>
                                    <Card.Title style={{ minHeight: "55px", fontWeight: "bold" }}>
                                        Project-based learning
                                    </Card.Title>
                                    <Card.Text>
                                        Terdapat project di setiap kelas yang akan kamu kerjakan di
                                        bawah bimbingan mentor.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-5">
                            <Card style={{ width: "15rem", minHeight: "450px" }}>
                                <Card.Img
                                    variant="top"
                                    src="https://edspert.id/assets/img/keunggulan/certificate.png"
                                />
                                <Card.Body style={{ textAlign: "center" }}>
                                    <Card.Title style={{ minHeight: "55px", fontWeight: "bold" }}>
                                        Certificate
                                    </Card.Title>
                                    <Card.Text>
                                        Akan ada sertifikat kelulusan yang bisa kamu gunakan untuk
                                        mempermudah mendapat pekerjaan.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container className="pt-2">
                    <Row className="justify-content-md-center">
                        <Col md={{ span: 10 }} style={{ textAlign: "center" }}>
                            <h1>Kenali program dari Edspert</h1>
                            <h4>
                                Edspert hadir dengan format pembelajaran yang kami siapkan untuk
                                menunjang potensi-potensi terbaik kalian.
                            </h4>
                        </Col>
                    </Row>
                </Container>

                <Container className="py-5">
                    <Row className="justify-content-md-center">
                        <Col md={{ span: 10 }}>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Webinar</Accordion.Header>
                                    <Accordion.Body>
                                        <h5>Deskripsi</h5>
                                        <p>
                                            Kelas yang terdiri dari sesi pemamparan materi, dan
                                            diskusi dengan mentor.
                                        </p>
                                        <h5>Jadwal</h5>
                                        <p>Jadwal berbeda-beda untuk setiap webinar. 1 sesi.</p>
                                        <h5>Fasilitas</h5>
                                        <p>Sertifikat, Diskusi dengan Mentor, Grup Komunitas</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Bootcamp</Accordion.Header>
                                    <Accordion.Body>
                                        <h5>Deskripsi</h5>
                                        <p>
                                            Pembelajaran intensif terdiri dari sesi pemamparan materi,
                                            diskusi dengan mentor, tugas, pembuatan portfolio.
                                        </p>
                                        <h5>Jadwal</h5>
                                        <p>3x pertemuan seminggu. Durasi 1 bulan.</p>
                                        <h5>Fasilitas</h5>
                                        <p>
                                            Sertifikat Resmi, Grup Mentoring dan Networking, Materi
                                            dan Recording Class, Portfolio
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Online Course</Accordion.Header>
                                    <Accordion.Body>
                                        <h5>Deskripsi</h5>
                                        <p>
                                            Pembelajaran yang dilakukan secara mandiri. Pemamparan
                                            materi dikemas dalam bentuk video.
                                        </p>
                                        <h5>Jadwal</h5>
                                        <p>
                                            Sesuai jadwal waktu luang kamu. Rata-rata dapat
                                            diselesaikan dalam 6-10 hari
                                        </p>
                                        <h5>Fasilitas</h5>
                                        <p>Video pembelajaran, Case Study</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;
