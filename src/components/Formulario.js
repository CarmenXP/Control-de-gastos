import { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = () => {
    //creando states

    const [nombre, guardarNombre] = useState("");
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError]= useState (false);
//evento onSubmit para enviar los gastos

    const agregarGasto = e => {
        e.preventDefault();
        //válidar
        if(cantidad <1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        //construir el gasto
        guardarError(false);
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        console.log(gasto)
        //pasar el gasto al componente principal
        //resetear form
    }

    return ( 
        <form
        onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error mensaje = "Ambos campos son obligatorios o Presupuesto incorrecto" /> : null}

            <div className= "campo">
                <label>Nombre del gasto</label>
                <input
                type ="text"
                className= "u-full-width"
                placeholder="Transporte"
                value= {nombre}
                onChange= {e=> guardarNombre(e.target.value) }

                />
            </div>
            
            <div className= "campo">
                <label>Cantidad</label>
                <input
                type ="number"
                className= "u-full-width"
                placeholder="500"
                value={cantidad}
                onChange= {e=> guardarCantidad(parseInt (e.target.value, 10)) }


                />
            </div>
            <input
                type= "submit"
                className ="button-primary u-full-width"
                value= "Agregar Gasto"

            />

        </form>
       
     );
}
 
export default Formulario;