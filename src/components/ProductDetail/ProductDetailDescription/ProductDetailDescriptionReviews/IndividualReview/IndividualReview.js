import React from "react";
import { Image } from "react-bootstrap";
import StarRating from "../../../../UI/StarRating/StarRating";

import "./IndividualReview.css";

export default function IndividualReview() {
	return (
		<section className="IndividualReview mt-3">
			<div className="review__customer">
				<Image
					src="https://secure.gravatar.com/avatar/f0cde930b42c79145194679d5b6e3b1d?s=60&d=mm&r=g"
					className="me-5 mb-3"
				/>
				<StarRating rating={3.7} />
				<div>
					<b>Customer Name</b>
				</div>
				<div>Hari ini</div>
			</div>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</p>
		</section>
	);
}
