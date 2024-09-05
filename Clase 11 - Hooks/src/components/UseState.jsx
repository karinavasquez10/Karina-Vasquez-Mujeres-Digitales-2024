import { useState } from "react";

const UseState = () => {
    const [variable, setVariable] = useState("valor inicial");
    setVariable("nuevo valor");

    return <div>{variable}</div>;
};

export default UseState;
