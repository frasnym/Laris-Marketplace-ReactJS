import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

import Layout from "../../components/Layout/Layout";
import Descriptions from "../../components/ProductDetail/Descriptions/Descriptions";
import Headers from "../../components/ProductDetail/Headers/Headers";
import Images from "../../components/ProductDetail/Images/Images";
import Infos from "../../components/ProductDetail/Infos/Infos";
import MyBreadcrumb from "../../components/UI/Breadcrumb/Breadcrumb";

import "./ProductDetailPage.css";

export default class ProductDetailPage extends Component {
	product = {
		price: 320000,
	};

	state = {
		qty: 1,
		total: this.product.price,
	};

	totalPriceHandler = (qty) => {
		const total = this.product.price * qty;

		this.setState({
			qty,
			total,
		});
	};

	breadcrumbItems = [
		{
			slug: "slug1",
			title: "Category",
		},
		{
			slug: "slug2",
			title: "SubCategory",
		},
		{
			slug: "slug3",
			title: "Product Name",
		},
	];

	images = [
		"https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/11/14/97bf9c4f-88a6-4c8c-9cad-24910c3fa5db.jpg.webp",
		"https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/12/18/b22bad51-a5f9-4470-84cd-c7c7233884f3.jpg.webp",
		"https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/12/18/22030b85-b81f-4558-8cb6-be6d26366dd1.jpg",
		"https://ecs7.tokopedia.net/img/cache/900/product-1/2020/9/1/13276346/13276346_7b4bd124-01fb-4973-bfa2-5ac2f5fc92ea_1200_1200",
		"https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/11/11/ecafd7ad-f8d7-4903-940d-337408a123d0.jpg",
		"https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/11/11/3bae45d2-9157-4b85-a380-9edb1a7b3f9c.jpg",
	];

	render() {
		return (
			<Layout>
				<div className="Breadcrumb">
					<div className="container pt-3 pb-3">
						<MyBreadcrumb items={this.breadcrumbItems} />
					</div>
				</div>
				<div className="ProductDetail container pt-5">
					<Row>
						<Col md={12} className="mb-3">
							<Headers />
						</Col>
						<Col md={4}>
							<Images images={this.images} />
						</Col>
						<Col md={8}>
							<Infos
								product={this.product}
								total={this.state.total}
								qty={this.state.qty}
								totalPriceHandler={this.totalPriceHandler}
							/>
						</Col>
						<Col md={12}>
							<Descriptions />
						</Col>
					</Row>
				</div>
			</Layout>
		);
	}
}
