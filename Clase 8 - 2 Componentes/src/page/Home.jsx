import { useState } from "react";

import imgen1 from "../assets/imagen1.jpg";
import imgen2 from "../assets/imagen2.jpg";
import imgen3 from "../assets/imagen3.jpg";
import imgen4 from "../assets/imagen4.jpeg";

import "../styles/page/home.css";

function Home() {
    // Variables
    const [imagenState, setImagenState] = useState(imgen3); // Estado de las imagenes
    const ListaImagenes = [imgen1, imgen2, imgen3, imgen4]; // Lista de las imagenes

    // Generar un numero aleatorio
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // Manejador del evento del boton
    const handlerButton = () => {
        const aleatorio = getRandomInt(3); // Obtenemos el numero aleatorio
        setImagenState(ListaImagenes[aleatorio]); // Asignamos al estado el valor de la imagen, en el indice del numero aleatorio
    };

    return (
        <main>
            <figcaption>
                <img src={imagenState} />
            </figcaption>

            <button onClick={handlerButton}>Cambiar imagen</button>
        </main>
    );
}

export default Home;
