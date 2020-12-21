import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Breadcrumb.css";

export default function MyBreadcrumb(props) {
	// Generate Url
	const slugUrl = [];
	const items = props.items.map((item, index) => {
		slugUrl.push(item.slug);
		const actived = index + 1 === props.items.length ? true : false;

		return (
			<Breadcrumb.Item
				className={`breadcrumb-item ${actived}`}
				key={slugUrl.join("/")}
				linkAs={NavLink}
				linkProps={{ to: `/${slugUrl.join("/")}` }}
				active={actived}
			>
				{item.title}
			</Breadcrumb.Item>
		);
	});

	return (
		<Breadcrumb bsPrefix="breadcrumb mb-0">
			<li className="breadcrumb-item">
				<NavLink to="/">Home</NavLink>
			</li>
			{items}
		</Breadcrumb>
	);
}
