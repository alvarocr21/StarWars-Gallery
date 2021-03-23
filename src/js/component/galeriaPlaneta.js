import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const GaleriaPlanet = () => {
	const { store, actions } = useContext(Context);

	const titulo = {
		color: "red"
	};
	return (
		<div>
			<div className="mt-4">
				<h3 style={titulo}>Planets</h3>
			</div>
			<div className="testimonial-group">
				<div className="row mt-4">
					{store.planetas.map((planeta, index) => {
						return (
							<div key={index} className="cardhorizontal col-4">
								<div className="card">
									<img
										src="https://lumiere-a.akamaihd.net/v1/images/magistrate-morgan-elsbeth-main_d7b9d192.jpeg?region=262%2C1%2C951%2C536&width=768"
										className="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">{planeta.name}</h5>
										<p className="card-text">
											<ul>
												<li>
													Population:
													{planeta.population}
												</li>
												<li>
													Terrain:
													{planeta.terrain}
												</li>
											</ul>
										</p>
										<div className="d-flex justify-content-between">
											<a href="#" className="btn btn-primary">
												Learn more!
											</a>
											<button className="btn btn-outline-warning border border-warning p-2">
												<i className="far fa-heart" />
											</button>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
