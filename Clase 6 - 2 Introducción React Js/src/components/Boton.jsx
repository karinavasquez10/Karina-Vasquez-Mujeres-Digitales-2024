import { useState } from "react";

const Boton = () => {
    const [state, setstate] = useState("hola");

    let saludo = "hola";

    const handleButton = () => {
        setstate("adios");
        saludo = "adios desde let";
    };

    return (
        <div>
            <p>{state}</p>

            <p>{saludo}</p>

            <button onClick={handleButton}>Cambiar saludo a despido</button>
        </div>
    );
};

export default Boton;
