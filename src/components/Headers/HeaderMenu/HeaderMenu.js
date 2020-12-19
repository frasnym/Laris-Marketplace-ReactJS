import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPhoneAlt, FaAngleDown, FaAngleRight } from "react-icons/fa";

import "./HeaderMenu.css";

export default function HeaderMenu() {
	return (
		<>
			<div className="HeaderMenu">
				<div className="container">
					<Row>
						<Col md={3} className="category__toggle">
							<div className="ms-5 me-5">
								<b>Kategori</b>{" "}
								<FaAngleDown className="icon__item mt-3" />
							</div>
							<div className="category__menu">
								<ul className="mb-0">
									<li className="d-flex">
										<span className="flex-grow-1">
											Fashion
										</span>
										<div>
											<div className="icon__box">
												<FaAngleRight className="icon__grey" />
											</div>
										</div>
										<div className="category__submenu">
											<ul className="mb-0 ps-2 pe-5">
												<li>
													<b>Men</b>
													<ul>
														<li>Nike</li>
														<li>Adidas</li>
													</ul>
												</li>
												<li>Woman</li>
											</ul>
										</div>
									</li>
									<li>Elektronik</li>
									<li className="d-flex">
										<span className="flex-grow-1">
											Mainan
										</span>
										<div>
											<div className="icon__box">
												<FaAngleRight className="icon__grey" />
											</div>
										</div>
										<div className="category__submenu">
											<ul className="mb-0 ps-2 pe-5">
												<li>
													<b>Motor</b>
													<ul>
														<li>Honda</li>
														<li>Yamaha</li>
													</ul>
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</Col>
						<Col className="text-end align-self-center hotline__menu">
							<FaPhoneAlt className="icon__item" /> Hotline:{" "}
							<b>1-123-45678-999</b>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}
