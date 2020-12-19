import React from "react";
import Slider from "react-slick";
import ReactImageMagnify from "react-image-magnify";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ProductDetailImage.css";

export default function ProductDetailImage(props) {
	const slidersettings = {
		dots: true,
		lazyLoad: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: false,
	};

	const magnifyItems = props.images.map((image) => {
		const magnifySettings = {
			smallImage: {
				alt: "Wristwatch by Ted Baker London",
				isFluidWidth: true,
				src: image,
			},
			largeImage: {
				src: image,
				width: 700,
				height: 700,
			},
			enlargedImagePosition: "over",
		};

		return (
			<ReactImageMagnify
				imageClassName="magnify__container"
				enlargedImageContainerClassName="magnify__container"
				{...magnifySettings}
			/>
		);
	});

	return <Slider {...slidersettings}>{magnifyItems}</Slider>;
}
