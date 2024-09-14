import { useContext } from "react";
import PropTypes from "prop-types";

import { CountContext } from "../../pages/App";

import "./card.scss";

const Card = ({ title, img, description, increment }) => {
    const { state } = useContext(CountContext);
    const { count, setCount } = state;

    return (
        <article className="card">
            <h2>{title}</h2>

            <figure>
                <img src={img} alt="Placeholder" />
            </figure>

            <article>
                <p>{description}</p>
            </article>

            <button
                onClick={() => {
                    setCount(count + increment);
                }}
            >
                Contar en {increment}
            </button>
        </article>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    increment: PropTypes.number,
};

export default Card;
