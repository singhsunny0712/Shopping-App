import React from 'react';
import product from "../products";
import {Row,Col} from "react-bootstrap";
import ProductScreen from "./ProductScreen";

const homeScreen=()=> {
    return (
        <>
        <Row>
            {
                product.map(pro=>(
                    <Col key={pro._id} md={3}>
                        <ProductScreen product={pro} />
                    </Col>
                ))
            }
        </Row>
             
        </>
    );
}

export default homeScreen;