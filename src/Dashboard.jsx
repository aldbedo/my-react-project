import 'bootstrap/dist/css/bootstrap.min.css';

import {Card, Container, Col,Row} from 'react-bootstrap'

function Dashboard() {

    return (
        <Container>

            {/* first row */}
            <Row>
                <Col xs={12} md={7}>
                    <div className="box">
                        <h2>1</h2>
                    </div>
                </Col>
                <Col xs={12} md={5}>
                    <div className="box">
                        <h2>2</h2>
                    </div>
                </Col>
            </Row>
            
            {/* second row */}
            <Row>
                <Col xs={12} md={4}>
                    <div className="box box-size">
                        <h2>3</h2>
                    </div>
                </Col>

                <Col xs={12} md={8}>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className="box">
                                <h2>4</h2>
                            </div>
                        </Col>

                        <Col xs={12} md={6}>
                            <div className="box">
                                <h2>5</h2>
                            </div>
                        </Col>

                        <Col xs={12} md={12}>
                            <div className="box">
                                <h2>6</h2>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard