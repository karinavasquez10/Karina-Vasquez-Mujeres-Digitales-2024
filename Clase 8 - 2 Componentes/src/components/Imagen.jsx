import PropTypes from "prop-types";

function Imagen({ children, texto, numero }) {
    return (
        <figcaption className="componente_children">
            {children}
            <span>{texto}</span>
            <span>{numero}</span>
        </figcaption>
    );
}

Imagen.propTypes = {
    children: PropTypes.element,
    texto: PropTypes.string,
    numero: PropTypes.number,
    bolean: PropTypes.bool,
    arrays: PropTypes.array,
    objetos: PropTypes.object,
};

export default Imagen;
