import PropTypes from "prop-types";
import Imput from "../atoms/Imput";

const ContainerInputs = ({ imputsObject }) => {
    return (
        <section>
            <article>
                <Imput id={imputsObject.name.id} text={imputsObject.name.text} type={imputsObject.name.type} />
                <Imput text={imputsObject.lastName.text} type={imputsObject.lastName.type} />
            </article>

            <label>
                <Imput text={imputsObject.email.text} type={imputsObject.email.type} />
            </label>

            <article>
                <Imput text={imputsObject.date.text} type={imputsObject.date.type} />
            </article>
        </section>
    );
};

ContainerInputs.propTypes = {
    imputsObject: PropTypes.object,
};

export default ContainerInputs;
