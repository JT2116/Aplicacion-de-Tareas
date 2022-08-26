import React,{useState} from 'react';
import '../styles/Formulario.css';
import {v4 as uuidv4} from 'uuid';

function Formulario(props) {

    const [input,setInput] = useState('');

    const Cambio = e => {
        setInput(e.target.value);

    };

    const Envio = e => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false            
        };

        props.onSubmit(tareaNueva);
    };


    return (
        <form className='tarea=form' onSubmit={Envio}>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={Cambio}                                    
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    );
}

export default Formulario;