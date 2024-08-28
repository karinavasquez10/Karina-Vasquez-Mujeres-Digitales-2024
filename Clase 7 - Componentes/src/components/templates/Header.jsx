import Navegador from "../organisms/Navegador";

const Header = ({ lista }) => {
    return (
        <header>
            <Navegador lista={lista} />
        </header>
    );
};

export default Header;
