import Logo from "../atoms/Logo";
import Lista from "../molecules/Lista";

const Navegador = ({ lista }) => {
    return (
        <nav>
            <Logo />
            <Lista lista={lista} />
        </nav>
    );
};

export default Navegador;
