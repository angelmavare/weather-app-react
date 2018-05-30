/*Esta es la forma convencional de escribir un componente, sin embargo hay un ejemplo de escritura mas sencillo para componentes SIN estado
en el componente "Form" */
import React from "react"

class Weather extends React.Component{
    render(){
        return(
            <div>
               {
                this.props.city && this.props.country && <p className="weather__key">Location: 
                    <span className="weather__value"> {this.props.city},{this.props.country}</span>
                </p>
               } 
               {
                this.props.temperature && <p className="weather__key">Temperature: 
                    <span className="weather__value"> {this.props.temperature} Â°C</span>
                </p>
               } 
               {
                this.props.humidity && <p className="weather__key">Humidity: 
                    <span className="weather__value"> {this.props.humidity} %</span>
                </p>
               }
               {
                this.props.description && <p className="weather__key">Conditions: 
                    <span className="weather__value"> {this.props.description}</span>
                </p>
               }
               {
                this.props.error && <p className="weather__error">
                    {this.props.error}
                </p>
               } 
               
                
                
            </div>
        );
    }
};
export default Weather;