import React from "react";
import { Carousel } from "react-bootstrap";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

import "./HomeBanner.css";

export default function HomeBanner() {
	return (
		<div className="HomeBanner">
			<div className="container">
				<Carousel
					nextIcon={<FaAngleDoubleRight className="large__icon" />}
					nextLabel=""
					prevIcon={<FaAngleDoubleLeft className="large__icon" />}
					prevLabel=""
					className="pt-3 pb-3"
				>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2020/12/17/82a2f794-af70-49a8-be6f-15efd23229b3.jpg.webp"
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2020/12/17/0bdc0341-f219-4a59-871e-a6cc8c813bab.jpg.webp"
							alt="Third slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2020/12/17/6a49d7c2-4e20-44ec-ad7f-92154367f382.jpg.webp"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
}
