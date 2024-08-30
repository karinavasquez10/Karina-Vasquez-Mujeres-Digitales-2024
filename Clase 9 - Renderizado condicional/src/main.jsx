import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/* import HomeClase from "./page/HomeClase.jsx"; */
import HomeCondicional from "./page/HomeCondicional.jsx";
import "./styles/global.scss";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <HomeClase /> */}
        <HomeCondicional />
    </StrictMode>
);
