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

    const validationText = (text) => {
        const regex = /^[a-zA-Z\s]*$/; // ¿Cómo podemos agregar tildes en la expresión regular?
        return regex.test(text);
    };

    const validationCode = (code) => {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(code);
    };

    // * Funciones de validación de input
    // Validar nombre
    const handlerName = (event) => {
        const name = event.target.value;

        if (validationText(name)) {
            setName(name);
            setNameClass("valid");
        } else {
            setNameClass("invalid");
        }
    };

    // Validar apellido
    const handlerLastName = (event) => {
        const lastName = event.target.value;

        if (validationText(lastName)) {
            setLastName(lastName);
            setLastNameClass("valid");
        } else {
            setLastNameClass("invalid");
        }
    };

    // Validar matricula
    const handlerCode = (event) => {
        const code = event.target.value;

        if (validationCode(code)) {
            setCode(code);
            setCodeClass("valid");
        } else {
            setCodeClass("invalid");
        }
    };

    //* Validar formulario
    const handlerSubmit = (event) => {
        event.preventDefault();

        if (name === "" || name === null || !validationText(name)) {
            alert("El nombre es inválido");
            return;
        }

        if (lastName === "" || lastName === null || !validationText(lastName)) {
            alert("El apellido es inválido");
            return;
        }

        if (code === "" || code === null || !validationCode(code)) {
            alert("La matricula es inválida");
            return;
        }

        setOdontologo({
            nombre: name,
            apellido: lastName,
            matricula: code,
        });

        const fetchData = async (URL) => {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(odontologo),
            };

            const responde = await fetch(URL, options);
            const res = await responde.json();

            console.log(res);
        };

        fetchData("http://localhost:8080/odontologo/guardar");
    };

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
