import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { GaleriaPersonaje } from "../component/galeriaPersonaje";
import { GaleriaPlanet } from "../component/galeriaPlaneta";
import "../../styles/demo.scss";

export const GaleriaSW = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<GaleriaPersonaje />
			<GaleriaPlanet />
		</div>
	);
};
