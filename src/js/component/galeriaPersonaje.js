import React, { useContext } from "react";
import { Link } from "react-router-dom";
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

			<div className="row mt-4">
				{store.personajes.map((personaje, index) => {
					return (
						<div key={index} className="col-3 mx-1 my-1">
							<div className="card">
								<img
									src="https://lumiere-a.akamaihd.net/v1/images/magistrate-morgan-elsbeth-main_d7b9d192.jpeg?region=262%2C1%2C951%2C536&width=768"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">{personaje.name}</h5>
									<p className="card-text">
										<ul>
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
										</ul>
									</p>
									<div className="d-flex justify-content-between">
										<a href="#" className="btn btn-primary">
											Learn more!
										</a>
										<button
											className="btn btn-outline-warning border border-warning p-2"
											onClick={actions.addFavorite(personaje.name)}>
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
	);
};
