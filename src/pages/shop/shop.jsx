import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

import { Card, Button, Form, Row, Col } from "react-bootstrap";

export const Shop = () => {
	return (
		<>
			<div align="center" className="shopTitle">
				<h1>Tech Shop</h1>
			</div>
			<Row xs={1} md={3} className="g-4">
				{PRODUCTS.map((product) => (
					<Col align="center" key={product}>
						<Product data={product} />
					</Col>
				))}
			</Row>
		</>
	);
};
