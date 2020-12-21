import React from "react";
import SingleStarRating from "../../../UI/SingleStarRating/SingleStarRating";
import StarRating from "../../../UI/StarRating/StarRating";
import IndividualReview from "./IndividualReview/IndividualReview";

import "./Reviews.css";

export default function Reviews() {
	const singleRatings = [
		{
			num: 5,
			progress: 60,
			total: 100,
		},
		{
			num: 4,
			progress: 15,
			total: 340,
		},
		{
			num: 3,
			progress: 2,
			total: 3,
		},
		{
			num: 2,
			progress: 0,
			total: 0,
		},
		{
			num: 1,
			progress: 1,
			total: 1,
		},
	];

	return (
		<section className="Reviews">
			<div className="reviews__score">
				<div>
					<p>Rata-rata Nilai Ulasan</p>
					<h5 className="rating__score">
						3.7<span>/ 5</span>
					</h5>
					<StarRating rating={3.7} />
					<div>&nbsp;(1 Review)</div>
				</div>
				<div className="mt-auto">
					{singleRatings.map((item) => {
						return (
							<SingleStarRating
								key={`singlestar${item.num}`}
								num={item.num}
								progress={item.progress}
								total={item.total}
							/>
						);
					})}
				</div>
			</div>
			<div className="reviews__list">
				<div className="header">2 Reviews For This Product</div>
				<div>
					<IndividualReview />
					<IndividualReview />
					<IndividualReview />
				</div>
			</div>
		</section>
	);
}
