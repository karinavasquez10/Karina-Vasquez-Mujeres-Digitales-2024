import PropTypes from "prop-types";

const Imput = ({ text, type, id }) => {
    return (
        <label form="name">
            <span>{text}</span>
            <input id={id} type={type} />
        </label>
    );
};

Imput.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
};

export default Imput;
