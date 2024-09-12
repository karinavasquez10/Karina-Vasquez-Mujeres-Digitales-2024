import { useState } from "react";

function App() {
    const [odontologo, setOdontologo] = useState({ nombre: null, apellido: null, matricula: null });
    // Estados para el imput de nombre
    const [name, setName] = useState("");
    const [nameClass, setNameClass] = useState("");

    // Estados para el imput de apellido
    const [lastName, setLastName] = useState("");
    const [lastNameClass, setLastNameClass] = useState("");

    // Estados para el imput de matricula
    const [code, setCode] = useState("");
    const [codeClass, setCodeClass] = useState("");

    // * Funciones de validación de input
    // Validar nombre
    const handlerName = (event) => {
        const name = event.target.value;
        const regex = /^[a-zA-Z\s]*$/; // ¿Cómo podemos agregar tildes en la expresión regular?

        if (regex.test(name)) {
            console.log("Nombre válido");
            setName(name);
            setNameClass("valid");
        } else {
            setNameClass("invalid");
            console.log("Nombre inválido");
        }
    };

    // Validar apellido
    const handlerLastName = (e) => {};

    // Validar matricula
    const handlerCode = (e) => {};

    //* Validar formulario
    const handlerSubmit = (e) => {};

    return (
        <>
            <h1>Formularios</h1>

            <form onSubmit={handlerSubmit}>
                <input
                    className={nameClass}
                    onChange={handlerName}
                    type="text"
                    name="name"
                    autoComplete="firstname"
                    required
                />

                <input
                    className={lastNameClass}
                    onChange={handlerLastName}
                    type="text"
                    name="lastname"
                    autoComplete="lastname"
                    required
                />

                <input className={codeClass} onChange={handlerCode} type="text" name="code" required />

                <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default App;
