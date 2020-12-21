import React from "react";

export default function InfoItem(props) {
	return (
		<div className="item__detail">
			<dt className="text-muted pe-3">{props.title}</dt>
			<dd>{props.detail}</dd>
		</div>
	);
}
