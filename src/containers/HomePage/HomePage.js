import React, { Component } from "react";
import HighlightItems from "../../components/HighlightItems/HighlightItems";

import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Layout from "../../components/Layout/Layout";

export default class HomePage extends Component {
	render() {
		return (
			<Layout>
				<HomeBanner />
				<HighlightItems />
			</Layout>
		);
	}
}
