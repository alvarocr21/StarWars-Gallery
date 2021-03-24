const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			favoritos: [
				{
					name: "",
					like: false
				}
			],
			uri: "https://swapi.dev/api/"
		},

		actions: {
			// Use getActions to call a function within a fuction

			addFavorite: favorito => {
				//setStore({ favoritos: favorito });
				const store = getStore();
				let element = {
					name: favorito,
					like: true
				};
				setStore(store.favoritos.push(element));
			},

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
			}
		}
	};
};

export default getState;
