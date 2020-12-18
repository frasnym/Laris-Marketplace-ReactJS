import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import "./HighlightItem.css";

export default function HighlightItem(props) {
	const renderStarRating = [
		<FaStar key="star0" className="text-muted" />,
		<FaStar key="star1" className="text-muted" />,
		<FaStar key="star2" className="text-muted" />,
		<FaStar key="star3" className="text-muted" />,
		<FaStar key="star4" className="text-muted" />,
	];
	if (props.rating) {
		for (let i = 0; i < Math.round(props.rating); i++) {
			renderStarRating[i] = (
				<FaStar key={`star${i}`} className="rating__gold" />
			);
		}
	}

	return (
		<div className="HighlightItem">
			<NavLink to="/">
				<Card>
					<Card.Img variant="top" src={props.imageUrl} />
					<Card.Body>
						<Card.Text>
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</Card.Text>
						<Card.Title>
							<b>{props.price}</b>
						</Card.Title>
						<Card.Text>{renderStarRating}</Card.Text>
					</Card.Body>
				</Card>
			</NavLink>
		</div>
	);
}
