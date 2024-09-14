import { useState, createContext } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./app.scss";
import ContainerCards from "../components/info/ContainerCards";

export const CountContext = createContext();

function App() {
    const [count, setCount] = useState(0);

    const list = [
        {
            title: "React",
            description: "Esta es la tarjeta de React",
            img: reactLogo,
            increment: 1,
        },
        {
            title: "Vite",
            description: "Esta es la tarjeta de Vite",
            img: viteLogo,
            increment: 5,
        },
    ];

    const valueContext = {
        state: { count, setCount },
        list: list,
    };

    return (
        <CountContext.Provider value={valueContext}>
            <h1>contador con cards y UseContext</h1>

            <div className="container">
                <span>{count}</span>
            </div>

            <ContainerCards />
        </CountContext.Provider>
    );
}

export default App;
