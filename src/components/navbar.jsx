import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import { Button, Container, Navbar, Modal, Nav } from "react-bootstrap";

export const NavbarComponent = () => {
	return (
		<Navbar expand="lg">
			<Container>
				<Navbar.Brand as={Link} to="/">
					Techno Shop
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<Nav>
						<Nav.Link as={Link} to="/">
							Shop
						</Nav.Link>
						<Nav.Link as={Link} to="/cart">
							<ShoppingCart size={32} />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
