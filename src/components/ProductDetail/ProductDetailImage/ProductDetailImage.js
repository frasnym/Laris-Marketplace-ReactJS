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
	};

	const modalSliderItems = [];
	props.images.forEach((image) => {
		modalSliderItems.push(<Image src={image} fluid />);
	});

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
