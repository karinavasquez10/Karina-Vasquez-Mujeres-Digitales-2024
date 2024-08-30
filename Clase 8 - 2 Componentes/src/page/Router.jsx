import Home from "./Home";
import Formulario from "./Formulario";

const Router = () => {
    let ruta = window.location.pathname;

    if (ruta === "/home") {
        return <Home />;
    } else {
        return <Formulario />;
    }
};

export default Router;
