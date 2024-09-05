import { useState, useEffect } from "react";

const UseEffect = () => {
    const [state, setstate] = useState("Valor inicial");

    const URL = "https://jsonplaceholder.typicode.com/users";

    const callApi = async (url) => {
        try {
            const data = await fetch(url);
            const response = await data.json();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // Llamada a la API
        callApi(URL);
    }, [state]);

    return (
        <div>
            <button
                onClick={() => {
                    setstate("Cambio de valor");
                }}
            >
                Cambio del valor del useState
            </button>
        </div>
    );
};

export default UseEffect;
