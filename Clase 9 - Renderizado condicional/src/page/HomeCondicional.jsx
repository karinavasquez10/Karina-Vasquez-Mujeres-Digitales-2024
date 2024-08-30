import { useState } from "react";
import ComponenteCondicional from "../components/ComponenteCondicional";

function HomeCondicional() {
    const [state, setstate] = useState(true);

    const handleButton = () => {
        setstate(!state);
    };

    return (
        <div>
            <h1>Home Condicional</h1>

            <button onClick={handleButton}>{state ? "Ocultar" : "Mostrar"}</button>

            {state ? <ComponenteCondicional /> : null}
        </div>
    );
}

export default HomeCondicional;
