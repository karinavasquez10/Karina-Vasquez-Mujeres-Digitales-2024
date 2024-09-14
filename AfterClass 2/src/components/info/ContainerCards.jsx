import { useContext } from "react";

import Card from "../functionals/Card";

import { CountContext } from "../../pages/App";

import "./containerCards.scss";

const ContainerCards = () => {
    const { list } = useContext(CountContext);

    return (
        <div className="container-cards">
            {list.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    img={item.img}
                    increment={item.increment}
                />
            ))}
        </div>
    );
};

export default ContainerCards;
