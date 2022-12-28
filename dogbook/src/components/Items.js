import React from "react";
import {
    Container,
    Card,
    CardGroup,
    Placeholder,
    Carousel,
    Row,
    Col,
    Stack,
} from "react-bootstrap";
import PlaceholderProduct from "./PlaceholderProduct.png";
import placeholder from "./placeholder.svg";
export default function Items(props) {
    return (
        <Container className="ms-auto">
            <h1 className="titleText">Basic Row Design</h1>
            <div className="products">
                <CardGroup>
                    <Card className="ms-auto">
                        <Card.Img variant="top" src={PlaceholderProduct} />
                        <Card.Body>
                            <Card.Title>Your Product</Card.Title>
                            <Card.Text>
                                This will be a description for the
                                product.Everything is happy if you choose to
                                make it that way. You need to have a very firm
                                paint to do this. Just let your mind wander and
                                enjoy.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img src={PlaceholderProduct} />
                        <Card.Body>
                            <Card.Title>Your Product</Card.Title>
                            <Card.Text>
                                This will be a description for the product.
                                Everything is happy if you choose to make it
                                that way. You need to have a very firm paint to
                                do this. Just let your mind wander and enjoy.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img src={PlaceholderProduct} />
                        <Card.Body>
                            <Card.Title>Your Product</Card.Title>
                            <Card.Text>
                                This will be a description for the product.
                                Everything is happy if you choose to make it
                                that way. You need to have a very firm paint to
                                do this. Just let your mind wander and enjoy.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            <div className="products">
                <CardGroup>
                    <Card className="ms-auto">
                        <Card.Img variant="top" src={PlaceholderProduct} />
                        <Card.Body>
                            <Card.Title>Your Product</Card.Title>
                            <Card.Text>
                                This will be a description for the product.
                                Everything is happy if you choose to make it
                                that way. You need to have a very firm paint to
                                do this. Just let your mind wander and enjoy.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img src={PlaceholderProduct} />
                        <Card.Body>
                            <Card.Title>Your Product</Card.Title>
                            <Card.Text>
                                This will be a description for the
                                product.Everything is happy if you choose to
                                make it that way. You need to have a very firm
                                paint to do this. Just let your mind wander and
                                enjoy.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img src={PlaceholderProduct} />
                        <Card.Body>
                            <Card.Title>Your Product</Card.Title>
                            <Card.Text>
                                This will be a description for the product.
                                Everything is happy if you choose to make it
                                that way. You need to have a very firm paint to
                                do this. Just let your mind wander and enjoy.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>

            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={PlaceholderProduct} />
                            <Card.Body>
                                <Card.Title>Your Product</Card.Title>
                                <Card.Text>
                                    Description-bob ross ipsum: Everything is
                                    happy if you choose to make it that way. You
                                    need to have a very firm paint to do this.
                                    Just let your mind wander and enjoy. This
                                    should make you happy. We have no limits to
                                    our world. We're only limited by our
                                    imagination. Just make a decision and let it
                                    go.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

        // this is with the carousel
    );
}
