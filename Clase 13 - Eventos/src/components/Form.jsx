import { useState } from "react";

const Form = () => {
    const [dato_1, setDato_1] = useState("");
    const [dato_input, setDato_input] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let dato = event.target.identificador.value;
        setDato_1(dato);
        event.target.identificador.value = "";
    };

    const handleChange = (event) => {
        let dato = event.target.value;

        setDato_input(dato);

        console.log("Se activa el evento de cambio en el input");
    };

    return (
        <article>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="identificador" type="text" placeholder="Escribe un dato" />

                <button type="submit">Enviar</button>
            </form>

            <section>
                <h2>Formulario</h2>

                <p style={{ fontSize: "20px" }}>
                    Dato 1: <span>{dato_1}</span>
                </p>
            </section>

            <section>
                <h2>Input</h2>

                <p style={{ fontSize: "20px" }}>
                    Dato del input: <span>{dato_input}</span>
                </p>
            </section>
        </article>
    );
};

export default Form;
