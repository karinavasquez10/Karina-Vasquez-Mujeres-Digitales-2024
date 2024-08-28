const ElementoLista = ({ url, text }) => {
    return (
        <li className="nombre_perzonalizado">
            <a href={url}>{text}</a>
        </li>
    );
};

export default ElementoLista;
