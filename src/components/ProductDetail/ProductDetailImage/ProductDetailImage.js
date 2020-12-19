import React, { useState } from "react";
import Slider from "react-slick";
import ReactImageMagnify from "react-image-magnify";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ProductDetailImage.css";
import { Image, Modal } from "react-bootstrap";

export default function ProductDetailImage(props) {
	const [modalShow, setModalShow] = useState(false);

	const handleModalClose = () => setModalShow(false);
	const handleModalShow = () => setModalShow(true);

	const slidersettings = {
		dots: true,
		lazyLoad: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: false,
		dotsClass: "slick-dots slick-thumb",
		customPaging: function (i) {
			return <Image src={props.images[i]} fluid />;
		},
	};

	const modalSliderItems = [];
	const magnifyItems = [];
	props.images.forEach((image) => {
		// Slider for Modal
		modalSliderItems.push(<Image src={image} fluid />);

		// Slider Page Image
		const magnifySettings = {
			smallImage: {
				alt: image,
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
		magnifyItems.push(
			<div onClick={handleModalShow}>
				<ReactImageMagnify
					imageClassName="magnify__container"
					enlargedImageContainerClassName="magnify__container"
					{...magnifySettings}
				/>
			</div>
		);
	});

	return (
		<>
			<Slider {...slidersettings}>{magnifyItems}</Slider>
			<Modal
				show={modalShow}
				onHide={handleModalClose}
				className="product__modal"
				centered
			>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<div className="slider__container">
						<Slider {...slidersettings}>{modalSliderItems}</Slider>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}
