import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { fetchData } from '../../redux/testSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import Header from '../header/HeaderAndSideBar';

export default function Test() {
    const dispatch = useDispatch();
    const { list } = useSelector(state => state.list);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handleCardClick = (id) => {
        navigate(`/video/${id}`); // Use navigate instead of history.push
    };
    

    return (
        <Header>
            <Container>
                <Row>
                    {list.map((item, index) => (
                        <Col key={index} md="4" xs="6">
                            <Card onClick={() => handleCardClick(item.id)} style={{ cursor: 'pointer', marginBottom:"10px"}}>
                                <video width="100%" height="200px" controls poster={item.url}>
                                    <source src={item.video} type="video/mp4" />
                                </video>
                                <CardBody>
                                    <CardTitle tag="h5">{item.video}</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">{item.id}</CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Header>
    );
}