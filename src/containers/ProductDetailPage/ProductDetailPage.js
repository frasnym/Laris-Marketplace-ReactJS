import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

import Layout from "../../components/Layout/Layout";
import ProductDetailImage from "../../components/ProductDetail/ProductDetailImage/ProductDetailImage";
import MyBreadcrumb from "../../components/UI/Breadcrumb/Breadcrumb";

import "./ProductDetailPage.css";

export default class ProductDetailPage extends Component {
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
	];

	render() {
		return (
			<Layout>
				<div className="Breadcrumb">
					<div className="container pt-3 pb-3">
						<MyBreadcrumb items={this.breadcrumbItems} />
					</div>
				</div>
				<div className="container pt-3">
					<Row>
						<Col md={4}>
							<ProductDetailImage images={this.images} />
						</Col>
						<Col md={8}>Detail</Col>
						<Col md={12}>Desc</Col>
					</Row>
				</div>
			</Layout>
		);
	}
}
