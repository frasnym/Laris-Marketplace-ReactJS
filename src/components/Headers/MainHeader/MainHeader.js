import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

import "./MainHeader.css";

export default function MainHeader() {
	return (
		<div className="MainHeader">
			<div className="container">
				<div className="d-flex">
					<div className="flex-grow-1 logo me-5">
						<h3>LARIS LOGO!</h3>
					</div>
					<div className="flex-grow-1 d-none d-lg-block">
						<Form className="SearchForm d-flex">
							<Form.Control
								type="text"
								name="search_all"
								placeholder="Saya ingin berbelanja..."
							/>
							<Button variant="warning">Cari</Button>
						</Form>
					</div>
					<div className="ms-3 me-2">
						<div className="icon__box">
							<FaShoppingCart className="icon__item" />
						</div>
					</div>
					<Button
						variant="outline-warning"
						size="sm"
						className="me-2 button__action"
					>
						Masuk
					</Button>
					<Button
						variant="warning"
						size="sm"
						className="button__action"
					>
						Daftar
					</Button>
				</div>
				<div className="d-lg-none pt-2">
					<Form className="SearchForm d-flex">
						<Form.Control
							type="text"
							name="search_all"
							placeholder="Saya ingin berbelanja..."
						/>
						<Button variant="warning">Cari</Button>
					</Form>
				</div>
			</div>
		</div>
	);
}
