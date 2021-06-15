import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'; 

const Form = ({handleCitas}) => {
    
    const [cita, setCita] = useState({
        estudiante: '', 
        tutor: '',
        fecha: '',
        hora: '',
        descripcion: ''

    });
    
    const handleChange = (event) => {
        setCita({
            ...cita,
            [event.target.name]:event.target.value })
    };

    const [error, setError] = useState(false); 

    const {estudiante, tutor, fecha, hora, descripcion} = cita; 

    const handleCita = event => {
        event.preventDefault();
        
        if (estudiante.trim() === '' || tutor.trim() === '' || fecha.trim() === '' 
            || hora.trim() === '' 
            || descripcion.trim() === ''){
                setError(true);
                return;
        };

        setError(false);

        cita.id = uuidv4();

        handleCitas(cita)

        setCita({
            estudiante: '', 
            tutor: '',
            fecha: '',
            hora: '',
            descripcion: ''
        })
    };

    return (
        <Fragment>
            <h2>Crear Citas</h2>

            {error ? <p className="alerta-error">
                        Todos los campos son obligatorios
                     </p> 
            : null}

            <form
                onSubmit = {handleCita}
            >

                <label>
                    Nombre del estudiante
                </label>
                <input
                    type="text"
                    name="estudiante"
                    className="u-full-width"
                    placeholder="Ingresa tu nombre"
                    onChange = {handleChange}
                    value={estudiante}
                />
                <label>
                    Nombre del tutor
                </label>
                <input
                    type="text"
                    name="tutor"
                    className="u-full-width"
                    placeholder="Ingresa tu nombre"
                    onChange = {handleChange}
                    value={tutor}
                />

                <label>
                    Fecha
                </label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange = {handleChange}
                    value={fecha}
                />

                <label>
                    Hora
                </label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange = {handleChange}
                    value={hora}
                />

                <label>
                    Descripción del estudiante
                </label>
                <textarea
                    type="text"
                    name="descripcion"
                    className="u-full-width"
                    onChange = {handleChange}
                    value={descripcion}
                /> 

                <button
                    type="submit"
                    className="button button-primary"
                > 
                    Registrar clase

                </button>
            </form>
        </Fragment>
    );
}

Form.propTypes = {
    handleCitas: PropTypes.func.isRequired
}

export default Form;