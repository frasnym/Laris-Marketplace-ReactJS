import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./HomeBanner.css";

export default function HomeBanner() {
	const settings = {
		dots: false,
		lazyLoad: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 1,
	};

	return (
		<div className="HomeBanner">
			<div className="container pt-3 pb-3">
				<Slider {...settings}>
					<img
						src="https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2020/12/17/82a2f794-af70-49a8-be6f-15efd23229b3.jpg.webp"
						alt="First slide"
					/>
					<img
						src="https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2020/12/17/0bdc0341-f219-4a59-871e-a6cc8c813bab.jpg.webp"
						alt="Third slide"
					/>
					<img
						src="https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2020/12/17/6a49d7c2-4e20-44ec-ad7f-92154367f382.jpg.webp"
						alt="Third slide"
					/>
				</Slider>
			</div>
		</div>
	);
}
