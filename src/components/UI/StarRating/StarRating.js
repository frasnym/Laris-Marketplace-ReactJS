import React from "react";
import { FaStar } from "react-icons/fa";

import "./StarRating.css";

export default function StarRating(props) {
	const renderStarRating = [
		<FaStar key="star0" className="text-muted me-1" />,
		<FaStar key="star1" className="text-muted me-1" />,
		<FaStar key="star2" className="text-muted me-1" />,
		<FaStar key="star3" className="text-muted me-1" />,
		<FaStar key="star4" className="text-muted me-1" />,
	];
	if (props.rating) {
		for (let i = 0; i < Math.round(props.rating); i++) {
			renderStarRating[i] = (
				<FaStar key={`star${i}`} className="rating__gold me-1" />
			);
		}
	}

	return <div className="StarRating">{renderStarRating}</div>;
}
