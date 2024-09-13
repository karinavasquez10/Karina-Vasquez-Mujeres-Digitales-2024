import { createContext } from "react";
import Form from "../components/Form";
import ContainerCard from "../components/ContainerCard";

export const FormContext = createContext();
export const SocialContext = createContext();

function App() {
    const URL = "http://localhost:8080/odontologo/guardar";

    return (
        <>
            <h1>Lifting State Up & use Context</h1>

            <FormContext.Provider value={{ url: URL }}>
                <Form />
            </FormContext.Provider>

            <SocialContext.Provider
                value={{
                    instagram: "https://www.instagram.com/",
                    facebook: "https://www.facebook.com/?locale=es_LA",
                }}
            >
                <ContainerCard
                    list={[
                        { title: "Odontólogo", description: "Nombre: Juan, Apellido: Perez, Matricula: 1234" },
                        { title: "Odontólogo", description: "Nombre: Maria, Apellido: Lopez, Matricula: 5678" },
                        { title: "Odontólogo", description: "Nombre: Carlos, Apellido: Rodriguez, Matricula: 91011" },
                        { title: "Odontólogo", description: "Nombre: Ana, Apellido: Gomez, Matricula: 121314" },
                    ]}
                />
            </SocialContext.Provider>
        </>
    );
}

export default App;
