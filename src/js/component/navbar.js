import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png"
						width="75"
						height="50"
					/>
				</span>
			</Link>

			<div className="ml-auto">
				<Link to="/galeria">
					<button className="btn btn-primary">Galería</button>
				</Link>
			</div>
		</nav>
	);
};
