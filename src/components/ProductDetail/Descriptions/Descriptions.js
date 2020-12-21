import React from "react";
import { Tab, Tabs } from "react-bootstrap";

import "./Descriptions.css";
import Reviews from "./Reviews/Reviews";
import StoreInfo from "./StoreInfo/StoreInfo";

export default function Descriptions() {
	const description = (
		<>
			<h2>Title asdbasdb</h2>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</p>
		</>
	);
	return (
		<section className="Descriptions">
			<Tabs
				id="Descriptions"
				className="justify-content-center"
				defaultActiveKey="reviews"
			>
				<Tab
					tabClassName="description_title"
					className="pt-5"
					eventKey="description"
					title="Deskripsi"
				>
					{description}
				</Tab>
				<Tab
					tabClassName="description_title"
					className="pt-5"
					eventKey="reviews"
					title="Ulasan"
				>
					<Reviews />
				</Tab>
				<Tab
					tabClassName="description_title"
					className="pt-5"
					eventKey="store_info"
					title="Catatan Toko"
				>
					<StoreInfo />
				</Tab>
			</Tabs>
		</section>
	);
}
