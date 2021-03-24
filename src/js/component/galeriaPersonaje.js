import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const GaleriaPersonaje = () => {
	const { store, actions } = useContext(Context);
	const titulo = {
		color: "red"
	};
	return (
		<div>
			<div className="mt-4">
				<h3 style={titulo}>Characters</h3>
			</div>
			<div className="testimonial-group">
				<div className="row mt-4">
					{store.personajes.map((personaje, index) => {
						return (
							<div key={index} className="cardhorizontal col-4">
								<div className="card">
									<img
										src="https://lumiere-a.akamaihd.net/v1/images/magistrate-morgan-elsbeth-main_d7b9d192.jpeg?region=262%2C1%2C951%2C536&width=768"
										className="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">{personaje.name}</h5>
										<p className="card-text ml-3">
											<li>
												Gender:
												{personaje.gender}
											</li>
											<li>
												Hair Color:
												{personaje.hair_color}
											</li>
											<li>
												Eye Color:
												{personaje.eye_color}
											</li>
										</p>
										<div className="d-flex justify-content-between">
											<a href="#" className="btn btn-primary">
												Learn more!
											</a>
											<a
												className="btn btn-outline-warning border border-warning p-2"
												onClick={() => actions.addFavorite(personaje.name)}>
												{store.favoritos.map((favorito, index) => {
													if (favorito.name == personaje.name) {
														return <i className="fas fa-heart" key={index} />;
													} else {
														return <i className="far fa-heart" key={index} />;
													}
												})}
											</a>
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
