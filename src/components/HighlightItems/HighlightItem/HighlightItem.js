import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./HighlightItem.css";
import StarRating from "../../UI/StarRating/StarRating";

export default function HighlightItem(props) {
	return (
		<div className="HighlightItem">
			<NavLink to="/product-detail">
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
						<Card.Text>
							<StarRating rating={3.7} />
						</Card.Text>
					</Card.Body>
				</Card>
			</NavLink>
		</div>
	);
}
