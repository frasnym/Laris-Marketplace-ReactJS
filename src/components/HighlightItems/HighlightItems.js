import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HighlightItems.css";
import HighlightItem from "./HighlightItem/HighlightItem";

export default function HighlightItems(props) {
	const settings = {
		dots: false,
		lazyLoad: true,
		infinite: false,
		autoplay: false,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 6,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

	const renderSliderItems = () => {
		const sliderItems = [];

		for (let i = 0; i < 10; i++) {
			sliderItems.push(
				<HighlightItem
					key={`sliderItem${i}`}
					imageUrl="https://ecs7-p.tokopedia.net/img/cache/300-square/attachment/2020/12/17/32520341/32520341_aa0d98d5-1e59-4f2a-9aed-cdbf35116654.jpg.webp"
					price="Rp 20.000"
					rating={3.7}
				/>
			);
		}

		console.log(sliderItems);

		return sliderItems;
	};

	return (
		<div className="HighlightItems mt-5">
			<div className="container">
				<div className="highlight__title d-flex pb-3">
					<h2 className="flex-grow-1">Terlaris Untukmu</h2>
					<NavLink to="/" className="align-self-center">
						Lihat semua
					</NavLink>
				</div>
				<Slider {...settings}>{renderSliderItems()}</Slider>
			</div>
		</div>
	);
}
