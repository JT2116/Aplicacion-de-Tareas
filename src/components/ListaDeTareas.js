import React,{useState} from 'react';
import Formulario from './Formulario';
import Tarea from './Tarea';
import '../styles/ListaDeTareas.css';

function ListaDeTareas() {

    const [tareas,setTareas] = useState([]);

    const addTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasAct = [tarea,...tareas];
            setTareas(tareasAct);
        }

    };

    const eliminarTarea = id => {
        const tareasAct = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasAct);
    };

    const completarTarea = id => {
        const tareaAct = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareaAct);
    };


    return (
        <div>
            <Formulario onSubmit={addTarea}/>
            <div className='tareas-lista-cont'>
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default ListaDeTareas;
