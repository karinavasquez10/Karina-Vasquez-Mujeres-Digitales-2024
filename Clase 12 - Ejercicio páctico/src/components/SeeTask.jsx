import PropTypes from 'prop-types';

const SeeTask = ({ listTask }) => {
    const elements = listTask.map((item, index) => (
        <li id='description' key={index}>
            <h2>{item.title || "Sin título"}</h2>
            <p>{item.description || "Sin descripción"}</p>
        </li>
    ));

    return (
        <div>
            <h1>Task list</h1>

            <ul>{elements}</ul>
        </div>
    );
};

SeeTask.propTypes = {
    listTask: PropTypes.array.isRequired,
};

export default SeeTask;