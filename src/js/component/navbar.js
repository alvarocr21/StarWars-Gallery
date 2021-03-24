import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
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
					<button className="btn btn-warning">Galería</button>
				</Link>
			</div>

			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites <span className="badge badge-light">0</span>
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favoritos.map((favorito, index) => {
							return (
								<a className="dropdown-item" href="#" key={index}>
									{favorito.name}
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};
