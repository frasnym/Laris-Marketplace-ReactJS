import React, { Component } from "react";

import Layout from "../../components/Layout/Layout";
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

	render() {
		return (
			<Layout>
				<div className="Breadcrumb">
					<div className="container pt-3 pb-3">
						<MyBreadcrumb items={this.breadcrumbItems} />
					</div>
				</div>
			</Layout>
		);
	}
}
