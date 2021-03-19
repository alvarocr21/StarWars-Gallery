import React from "react";
import { Link } from "react-router-dom";

export const GaleriaPersonaje = () => {
	return (
		<div className="row mt-4">
			<div className="col-4 mx-2">
				<div className="card">
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/magistrate-morgan-elsbeth-main_d7b9d192.jpeg?region=262%2C1%2C951%2C536&width=768"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
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
		</div>
	);
};
