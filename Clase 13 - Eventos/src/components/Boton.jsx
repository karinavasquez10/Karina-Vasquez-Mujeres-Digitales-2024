import { useState } from "react";

import "./boton.scss";

const Boton = () => {
    const [color, setColor] = useState("green");
    const [claseEstilos, setclaseEstilos] = useState("btn_dinamico");
    const [contador, setContador] = useState(0);

    const manejadorBoton = () => {
        if (color === "red") {
            console.log("El boton es rojo");
            setColor("green");
            setclaseEstilos("btn_dinamico");
        } else {
            console.log("Se dio click en el boton");
            setColor("red");
            setclaseEstilos("btn_dinamico rojo");
        }
    };

    const manejadorBotonApi = () => {
        (async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();

            console.log(data);
        })();
    };

    const contar = (numero) => {
        console.log(contador);

        setContador(contador + numero);
    };

    return (
        <>
            <button onClick={manejadorBoton} className={claseEstilos}>
                Capturar evento de Boton
            </button>

            <button onClick={manejadorBotonApi}>Llamado a la API</button>

            <button onClick={() => contar(2)}>Botón con parámetros</button>
        </>
    );
};

export default Boton;
