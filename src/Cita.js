import React from 'react';
import PropTypes from 'prop-types';


const Cita = ({cita, deleteCita}) => {
    return (
    <div className="cita">
        <p> Estudiante: </p> <span> {cita.estudiante} </span>
        <p> Tutor: </p> <span> {cita.tutor} </span>
        <p> Fecha: </p> <span> {cita.fecha} </span>
        <p> Hora: </p> <span> {cita.hora} </span>
        <p> Descripción: </p> <span> {cita.descripcion} </span>
    
        <button
            className="button eliminar u-full-width"
            onClick = {() => deleteCita(cita.id)}  
        >
            Eliminar &times;
        </button>
    </div>
    );
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    deleteCita: PropTypes.func.isRequired
}

export default Cita; 