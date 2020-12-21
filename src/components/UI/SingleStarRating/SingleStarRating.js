import React from "react";
import { ProgressBar } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

import "./SingleStarRating.css";

export default function SingleStarRating(props) {
	return (
		<section className="SingleStarRating">
			<div className="individual__star pe-3">
				<FaStar className="StarRating rating__gold" /> {props.num}
			</div>
			<ProgressBar variant="warning" now={props.progress} />
			<div className="individual__total ps-3">{props.total}</div>
		</section>
	);
}
