import React from "react";
import Topbar from "../Topbar/Topbar";

export default function Layout(props) {
	return (
		// React fragment
		<>
			<Topbar />
			Header
			{props.children}
		</>
	);
}
