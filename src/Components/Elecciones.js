import React from "react";

export default class Elecciones extends React.Component {

    render() {
        return (
            <div className='divElecciones'>
                <p>Última eleccion: {this.props.propUEleccion}</p>
                <p className="historial">Historial de elecciones: {this.props.propHEleccion.map((e, index) => (
                    <span key={index}>|{index + 1}:{e}| </span>
                ))}</p>
            </div>
        );
    };
}