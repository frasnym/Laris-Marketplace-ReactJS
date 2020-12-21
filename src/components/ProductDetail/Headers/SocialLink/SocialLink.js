import React from "react";

import "./SocialLink.css";

export default function SocialLink(props) {
	return (
		<div className="SocialLink">
			<a
				href={props.url}
				target="_blank"
				rel="noreferrer"
				className={`icon__box social__link__color ${props.bgcolor}`}
			>
				{props.children}
			</a>
		</div>
	);
}
