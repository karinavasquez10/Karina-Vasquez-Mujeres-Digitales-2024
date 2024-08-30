import { useState } from "react";

import ContainerInputs from "../components/molecules/ContainerInputs";

const Formulario = () => {
    const [listContacts, setListContacts] = useState([]);

    const inputs = {
        name: { text: "Primer nombre", type: "text" },
        lastName: { text: "Apellido", type: "text" },
        email: { text: "Correo electrónico", type: "email" },
        date: { text: "Fecha", type: "datetime-local" },
    };

    const handlerForm = (event) => {
        event.preventDefault();
        let name = document.getElementById("name");
        console.log(name);
        setListContacts([...listContacts, name]);
    };

    return (
        <>
            <form onSubmit={handlerForm}>
                <h1>Contact Us</h1>

                <ContainerInputs imputsObject={inputs} />

                <button>Submit</button>
            </form>

            <h1>
                {listContacts.map((item, index) => {
                    return <span key={index}>{item}</span>;
                })}
            </h1>
        </>
    );
};

export default Formulario;
