import ElementoLista from "../atoms/ElementoLista";

const Lista = ({ lista }) => {
    const elemtnosLista = lista.map((item, index) => {
        return <ElementoLista url={item.url} text={item.text} />;
    });

    return <ul>{elemtnosLista}</ul>;
};

export default Lista;
