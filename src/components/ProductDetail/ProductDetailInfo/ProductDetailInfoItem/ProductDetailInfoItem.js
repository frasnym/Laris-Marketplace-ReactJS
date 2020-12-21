import React from "react";

export default function ProductDetailInfoItem(props) {
	return (
		<div className="item__detail">
			<dt className="text-muted pe-3">{props.title}</dt>
			<dd>{props.detail}</dd>
		</div>
	);
}
