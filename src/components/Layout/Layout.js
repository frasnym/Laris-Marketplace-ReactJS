import React from "react";
import Headers from "../Headers/Headers";
import Topbar from "../Topbar/Topbar";

export default function Layout(props) {
	return (
		// React fragment
		<>
			<Topbar />
			<Headers />
			{props.children}
		</>
	);
}
