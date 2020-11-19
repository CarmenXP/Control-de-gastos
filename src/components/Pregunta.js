import Error from './Error';
const { Fragment } = require("react");
const {useState} = require("react");


export default function Pregunta({guardarPresupuesto, guardarRestante, actualizarPregunta}) {

//definiendo el state para presupuesto
const [cantidad, guardadCantidad]= useState(0);
// state paa el error
const [error, guardarError] = useState(false);

//leyendo la cantidad en el input
const definirPresupuesto = e =>{
    guardadCantidad(parseInt(e.target.value, 10))
}
// evento onSubmit
const agregarPresupuesto = e=>{
    e.preventDefault();
    //validación
    if(cantidad <1 || isNaN(cantidad)){
        guardarError(true);
        return;
    }
    //si pasa validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

}


    return (
        

        <Fragment>
            <h2> Coloca tu presupuesto</h2>
            {error ? <Error mensaje ="La cantidad introducida es incorrecta"/>: null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                type ="number"
                className ="u-full-width"
                placeholder="Coloca tu presupuesto"
                onChange={definirPresupuesto}
                />
                <input 
                type= "submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    )
}


