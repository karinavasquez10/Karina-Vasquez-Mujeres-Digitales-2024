import React from 'react';
import PropTypes from 'prop-types';
import ButtonAtom from './ButtonAtom';

const Header = ({ activeView, setActiveView }) => (
  <header className="mb-6">
    <nav>
      <ul className="flex">
        <ButtonAtom
          text="Agregar Tarea"
          isActive={activeView === 'add'}
          onClick={() => setActiveView('add')}
        />
        <ButtonAtom
          text="Ver Tareas"
          isActive={activeView === 'view'}
          onClick={() => setActiveView('view')}
        />
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  activeView: PropTypes.string.isRequired,
  setActiveView: PropTypes.func.isRequired,
};