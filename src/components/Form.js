/*NOTA 1 En este componente tenemos un ejemplo de como escribir componentes cuando no tienen un estado
o cuando solamente se usan para mostrar partes del UI*/
/*NOTA 2 Eliminamos el llamado "class, render y return" y los cambiamos por arrow functions que reciben un elemento "props"
tambien utilizamos el props.gueWeather sin el "this" */ 
/*Los componentes Weather y Titles estan escritos de la forma convencional*/ 
import React from "react";

const Form = props => (

            <div>
                <form onSubmit={props.getWeather}>
                    <input type="text" name="city" placeholder="City..."/>
                    <input type="text" name="country" placeholder="Country..."/>            
                    <button>Get Weather</button>
                </form>
            </div>
);
export default Form;