import React from "react";
import { Container } from "react-bootstrap";
import Items from "../components/Items";
import Categories from "../components/Categories";

export default function Homepage() {
    return (
        <Container>
            <Items />
            <Categories />
        </Container>
    );
}
