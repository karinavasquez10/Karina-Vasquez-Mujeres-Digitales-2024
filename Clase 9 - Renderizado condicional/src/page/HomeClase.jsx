import { useState } from "react";
import MiComponenteClase from "../components/MiComponenteClase";

function HomeClase() {
    const [showComponent, setShowComponent] = useState(true);

    const handleClick = () => {
        setShowComponent(!showComponent);
    };

    if (showComponent) {
        return (
            <>
                <h1>Componente de tipo clase</h1>
                <button onClick={handleClick}> quitar componente</button>

                <MiComponenteClase />
            </>
        );
    } else {
        return (
            <>
                <h1>Componente de tipo clase</h1>
                <button onClick={handleClick}> quitar componente</button>
            </>
        );
    }
}

export default HomeClase;
