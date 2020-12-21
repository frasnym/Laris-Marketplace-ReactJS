import React from "react";
import { Image } from "react-bootstrap";
import StarRating from "../../../UI/StarRating/StarRating";

import "./StoreInfo.css";

export default function StoreInfo() {
	return (
		<section className="StoreInfo">
			<Image
				src="https://ecs7.tokopedia.net/img/cache/100-square/default_picture_user/default_toped-17.jpg"
				className="me-5 mb-3"
			/>
			<div>
				<div className="store__detail">
					<dt>Nama Toko</dt>
					<dd>Toko ASB</dd>
				</div>
				<div className="store__detail">
					<dt>Alamat Toko</dt>
					<dd>Jakarta, Indonesia</dd>
				</div>
				<div className="store__detail">
					<dt>Rating</dt>
					<dd>
						<div className="d-flex align-items-center">
							<StarRating rating={3.7} />{" "}
							<div>&nbsp;(1 Review)</div>
						</div>
					</dd>
				</div>
			</div>
		</section>
	);
}
