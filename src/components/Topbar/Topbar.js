import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Topbar.css";

export default function Topbar() {
	return (
		<div className="container">
			<Row className="Topbar">
				<Col className="TopbarLeft text-start">
					<p>Selamat datang di LARIS!</p>
				</Col>
				<Col className="TopbarLeft text-end">
					<nav>
						<NavLink to="/" className="p-2 text-dark">
							Tentang Laris
						</NavLink>
						<NavLink to="/" className="p-2 text-dark">
							Laris Care
						</NavLink>
					</nav>
				</Col>
			</Row>
		</div>
	);
}
