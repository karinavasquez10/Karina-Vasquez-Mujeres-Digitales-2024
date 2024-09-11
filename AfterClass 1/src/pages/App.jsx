import { useEffect, useState } from "react";
import PropsTypes from "prop-types";

/* Componente de tarjeta */

const CardCharapter = ({ img, name, specie, location }) => {
    // Recibimos valores por props

    return (
        <article className="card">
            <figure>
                <img src={img}></img>
            </figure>

            <ul>
                <li>
                    <strong>Nombre:</strong> {name}
                </li>
                <li>
                    <strong>Especie:</strong> {specie}
                </li>
                <li>
                    <strong>Ubicación:</strong> {location.name}
                    <br />
                    <a href={location.url} target="_blank">
                        {location.url}
                    </a>
                </li>
            </ul>
        </article>
    );
};

CardCharapter.propTypes = {
    img: PropsTypes.string.isRequired,
    name: PropsTypes.string.isRequired,
    specie: PropsTypes.string.isRequired,
    location: PropsTypes.object.isRequired,
};

/* Componenete principal */

const App = () => {
    const URL = "https://rickandmortyapi.com/api"; // Url de la API
    const [listCharapters, setListCharapters] = useState([]); // Estado de la lista de personajes [variable (array), función (modifica el la variable)]

    useEffect(() => {
        // Hook de efecto (Cargar la información cuando se monta el componente)
        (async () => {
            const response = await fetch(`${URL}/character`); // Endpoint de personajes
            const res = await response.json(); // Pasar la respuesta a JSON
            setListCharapters(res.results); // Cambiar el valor al resultado de la respuesta
        })();
    }, []);

    return (
        <main className="conteiner_cards">
            <h1>Personajes de Rick and Morthy</h1>

            <section className="cards">
                {listCharapters.map((item, index) => {
                    // Recorrer la lista de personajes (Metodo de array MAP) para crear elemntos en el DOM
                    const { image, name, species, location } = item;

                    return (
                        <CardCharapter // Utilizamos el componente de tarjeta
                            key={`${index}_${name}`}
                            img={image}
                            name={name}
                            specie={species}
                            location={location}
                        />
                    );
                })}
            </section>
        </main>
    );
};

export default App;
