const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			favoritos: [],
			uri: "https://swapi.dev/api/"
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			//addFavorite: favorito => {
			//console.log(favorito);
			//setStore({ favoritos: favorito });
			//},

			loadPersons: () => {
				const store = getStore();

				fetch(store.uri + "people/")
					.then(res => res.json())
					.then(data => setStore({ personajes: data.results }));

				//console.log(response);
			},

			loadPlanets: () => {
				const store = getStore();

				fetch(store.uri + "planets/")
					.then(res => res.json())
					.then(data => setStore({ planetas: data.results }));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
