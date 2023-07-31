import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import { Card, Button, Form, Row, Col } from "react-bootstrap";

export const Product = (props) => {
	const { id, productName, price, productImage } = props.data;
	const { addToCart, cartItems } = useContext(ShopContext);
	const cartItemAmount = cartItems[id];
	return (
		<Card className="product">
			<Card.Body>
				<Card.Img variant="top" src={productImage} alt={productName} />

				<Card.Title>
					<b>{productName}</b>
				</Card.Title>
				<Card.Text> ${price}</Card.Text>

				<Button className="addToCartBtn" onClick={() => addToCart(id)}>
					Add to cart{cartItemAmount > 0 && <> ({cartItemAmount}) </>}
				</Button>
			</Card.Body>
		</Card>
	);
};
