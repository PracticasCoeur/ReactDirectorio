
import './App.css';
import React from 'react';
import Busqueda from './Busqueda';
import Lista from './Lista';
import Contacto from './Contacto';
import ModalAmigo from './ModalAmigo';

import AgregarAmigo from './AgregarAmigo';
import {ContactoProvider,ContactoContext} from './Context/ContactoProvider';
// import DummyComponent from './DummyComponent';
// import DummyComponent2 from './DummyComponent2';




function App() {
  // let contactos=[
  //   {
  //       nombre:"Plataa",
  //       telefono:"3222318719",
  //       correo:"cesar_josue30@hotmail.com"
  //   },
  //   {
  //       nombre:"Leoo",
  //       telefono:"111111",
  //       correo:"leo@joto.com"
  //   },
  //   {
  //       nombre:"Chino",
  //       telefono:"22222222",
  //       correo:"chino@mamadonew.com"
  //   },
  //   {
  //     nombre:"Yahir",
  //     telefono:"111111111",
  //     correo:"yahir@mamadonew.com"
  //   }
  // ]

  
  
  return(    
    <ContactoProvider>
      <ContactoContext.Consumer>
        {
          ({cantidadAmigos,
          contactosFiltro,
          borrarAmigo,
          modal})=>(
            <React.Fragment>
              <h1 className='titulo'>Mi Lista de Contactos</h1>
              <h3 className='cantidad'>Tengo <span> {cantidadAmigos} </span> amigos</h3>
              <Busqueda />
              <AgregarAmigo />
              <Lista>
                {
                  contactosFiltro.map((contacto)=>{
                      return(<Contacto 
                      nombre={contacto.nombre}
                      telefono={contacto.telefono}
                      correo={contacto.correo}
                      borrarAmigo={()=>borrarAmigo(contacto.telefono)}/>)

                  })
                }

              </Lista>
              {contactosFiltro.lenght === 0 && <h1>No tienes Amigos</h1>}
              {modal && <ModalAmigo />}
            </React.Fragment>
          )}
      </ContactoContext.Consumer>
    </ContactoProvider>
  );
}

export default App;


// let midato="Plataa";
// let numero1=10;
// let numero2=20;

// function suma(dato1,dato2){
//   return dato1+dato2;
// }

// let respuesta;
// if(props.miDato>50){
//   respuesta="Número Grande";
// }
// else{
//   respuesta="Numero Pequeño"
// }
// if(props.nombre){
//   console.log(props.nombre)
// }





  // <h1>Hola mundo</h1>,
  // <h1>{midato}</h1>,
  // <h1>{numero1+numero2}</h1>,
  // <h1>{suma(100,50)}</h1>