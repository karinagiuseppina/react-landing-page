import React from "react";

const elements = [
	{
		label: "Home",
		link: "#"
	},
	{
		label: "About",
		link: "#"
	},
	{
		label: "Services",
		link: "#"
	},
	{
		label: "Contact",
		link: "#"
	}
];

/**
 * change the content inside the map function
 **/
const elementsInHTML = elements.map((element, i) => {
	if (element.label === "Home") {
		return (
			<li className="nav-item active" key={i}>
				<a className="nav-link text-white" href={element.link}>
					{element.label}
					<span className="sr-only">(current)</span>
				</a>
			</li>
		);
	} else {
		return (
			<li className="nav-item active" key={i}>
				<a className="nav-link text-white-50" href={element.link}>
					{element.label}
				</a>
			</li>
		);
	}
});

const Navbar = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark mb-2 d-flex justify-content-between text-white">
			<a className="navbar-brand text-white" href="#">
				Start Bootstrap
			</a>
			<div
				className="collapse navbar-collapse justify-content-end"
				id="navbarNav">
				<ul className="navbar-nav">{elementsInHTML}</ul>
			</div>
		</nav>
	);
};

export default Navbar;
