import React from "react";
import { Card, Button, Container, Nav, Row, Col } from "react-bootstrap";
import PlaceholderProduct from "./PlaceholderProduct.png";

export default function Categories() {
    const categories = [
        "Shirts",
        "Sweaters",
        "Jeans",
        "Shoes",
        "Hoodies",
        "Accessories",
    ];

    return (
        <Container>
            <h1 className="titleText">Categories</h1>
            <Row>
                {Array.from({ length: 3 }).map((_, i) => (
                    <Col>
                        <Card>
                            <Button variant="light">
                                <div className="imgAndButton">
                                    <img
                                        className="categoryImage"
                                        src={PlaceholderProduct}
                                    />
                                    <h2 className="categoryText">
                                        {categories[i]}
                                    </h2>
                                </div>
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                {Array.from({ length: 3 }).map((_, i) => (
                    <Col>
                        <Card>
                            <Button variant="light">
                                <div className="imgAndButton">
                                    <img
                                        className="categoryImage"
                                        src={PlaceholderProduct}
                                    />
                                    <h2 className="categoryText">
                                        {categories[i + 3]}
                                    </h2>
                                </div>
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
