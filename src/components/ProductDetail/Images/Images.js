import React, { Component } from "react";
import Slider from "react-slick";
import ReactImageMagnify from "react-image-magnify";

import "./Images.css";
import { Image, Modal } from "react-bootstrap";

export default class Images extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			mainSliderNav1: null,
			mainSliderNav2: null,
		};
	}

	handleModalClose = () => this.setState({ modalShow: false });
	handleModalShow = () => this.setState({ modalShow: true });

	componentDidMount() {
		this.setState({
			mainSliderNav1: this.mainSlider,
			mainSliderNav2: this.mainSliderNav,
		});
	}

	render() {
		const sliderMainSettings = {
			asNavFor: this.state.mainSliderNav2,
			ref: (slider) => (this.mainSlider = slider),
			arrows: false,
			dots: false,
			lazyLoad: true,
		};

		const sliderMainNavSettings = {
			asNavFor: this.state.mainSliderNav1,
			ref: (slider) => (this.mainSliderNav = slider),
			slidesToShow: 3,
			swipeToSlide: true,
			focusOnSelect: true,
			className: "nav__slider",
			lazyLoad: true,
		};

		const images = this.props.images;

		const sliderModalSettings = {
			lazyLoad: true,
			dots: true,
			dotsClass: "slick-dots slick-thumb",
			customPaging: function (i) {
				return (
					<Image key={`thumb${images[i]}`} src={images[i]} fluid />
				);
			},
		};

		const modalSliderItems = [];
		const navSliderItems = [];
		const magnifyItems = [];

		this.props.images.forEach((image, index) => {
			// Slider for Modal
			modalSliderItems.push(
				<Image
					key={`modal${image}${index}`}
					src={image}
					fluid
					className="big__image"
				/>
			);

			// Slider for Nav
			navSliderItems.push(
				<div key={`nav${image}${index}`} className="image__wrapper">
					<Image src={image} fluid />
				</div>
			);

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
				<div
					key={`magni${image}${index}`}
					onClick={this.handleModalShow}
				>
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
				<Slider {...sliderMainSettings}>{magnifyItems}</Slider>
				<Slider {...sliderMainNavSettings}>{navSliderItems}</Slider>
				<Modal
					show={this.state.modalShow}
					onHide={this.handleModalClose}
					className="product__modal"
					centered
				>
					<Modal.Header closeButton></Modal.Header>
					<Modal.Body>
						<div className="slider__container">
							<Slider {...sliderModalSettings}>
								{modalSliderItems}
							</Slider>
						</div>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}
