import React, { Fragment, useState, useEffect } from 'react';
import Form from './Form';
import Cita from './Cita';




function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if (!citasIniciales){
    citasIniciales = [];
  }
  


  const [citas, setCitas] = useState(citasIniciales);

  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else {
      localStorage.setItem('citas', JSON.stringify([]));
    }

  }, [citas]);


  const handleCitas = cita => {
    setCitas([...citas, cita])
  };

  const deleteCita = id => {
    setCitas(citas.filter(cita => cita.id !== id));
  }

  const titulo = citas.length !== 0 ?  'Administra tu clase' :  'Registra una clase'

  return (
    <Fragment>
      <div className="container">
        
        <div className="row">
        
          <div className="one-half column">
        
            <Form 
              handleCitas={handleCitas}/>
        
          </div>

          <div className="one-half column">
            <h2> {titulo} </h2>
            {citas.map(cita =>  {
              return (
              <Cita
                key = {cita.id}
                cita = {cita}
                deleteCita = {deleteCita}
              />
            )})};
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
