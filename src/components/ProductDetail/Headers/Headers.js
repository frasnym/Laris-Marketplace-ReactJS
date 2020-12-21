import React from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

import StarRating from "../../UI/StarRating/StarRating";

import "./Headers.css";
import SocialLink from "./SocialLink/SocialLink";

export default function Headers() {
	const shareLinks = [
		{
			url: "/#",
			bgcolor: "facebook__bgcolor",
			content: <FaFacebookF className="social__icon__item" />,
		},
		{
			url: "/#",
			bgcolor: "twitter__bgcolor",
			content: <FaTwitter className="social__icon__item" />,
		},
		{
			url: "/#",
			bgcolor: "googeplus__bgcolor",
			content: <FaGooglePlusG className="social__icon__item" />,
		},
	];

	return (
		<div className="Headers">
			<div className="entry__left">
				<h3>This is a long product name</h3>
				<ul className="entry__meta mb-3">
					<li className="d-flex align-items-center">
						<StarRating rating={3.7} />
						<div>&nbsp;(1 Review)</div>
					</li>
					<li>Terjual 2000 Item</li>
					<li>Dilihat 3000 x</li>
				</ul>
			</div>
			<div className="share__links">
				{shareLinks.map((link) => {
					return (
						<SocialLink
							key={link.bgcolor}
							url={link.url}
							bgcolor={link.bgcolor}
						>
							{link.content}
						</SocialLink>
					);
				})}
			</div>
		</div>
	);
}
