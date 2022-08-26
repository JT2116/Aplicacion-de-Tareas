import React from 'react';
import '../styles/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
    return (
        <div className={completada ? 'tarea-cont completada' : 'tarea-cont'}>
            <div className='tarea-texto' onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className='tarea-icono-cont' onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className='tarea-icono' />
            </div>
        </div>
    );
}

export default Tarea;