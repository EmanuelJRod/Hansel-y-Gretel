import { Component } from 'react';
import data from './data.json'
import Elecciones from './Elecciones';
import Historia from './Historia';
import "../Styles/index.css";
import swal from 'sweetalert';

export default class Historiador extends Component {
    constructor() {
        super();
        this.state = {
            idx: 0,
            ultimaOpcion: "",
            historialElecciones: [],
        }
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.idx !== this.state.idx) {
            this.state.historialElecciones.push(this.state.ultimaOpcion);
        }

    };
    manejadorOpciones(eleccion) {
        console.log(this.state.idx);
        if (this.state.idx === 7 || this.state.idx === 8) {
            console.log(this.state.historialElecciones);
            swal("Entraste a la casa de la bruja", "No te preocupes, Hansel y Gretel sobreviven.", "warning")
        } else {

            if (this.state.idx % 2 === 0) {
                console.log("Indice par (id B o idx 0)");
                if (eleccion === "a") {
                    this.setState({ idx: this.state.idx + 1 })
                    this.setState({ ultimaOpcion: "A" });
                } else/*(eleccion === "b")*/ {
                    this.setState({ idx: this.state.idx + 2 })
                    this.setState({ ultimaOpcion: "B" })
                }
            } else {
                console.log("indice impar (id A)");
                if (eleccion === "a") {
                    this.setState({ idx: this.state.idx + 2 })
                    this.setState({ ultimaOpcion: "A" })
                } else/*(eleccion === "b")*/ {
                    this.setState({ idx: this.state.idx + 3 })
                    this.setState({ ultimaOpcion: "B" })
                }
            }
        };
    };

    render() {
        return (
            <div>
                <h1>Hansel y Gretel</h1>
                <div className='general'>

                    <Historia propIdx={this.state.idx} />
                    <div className='divOpciones'>
                        <div>
                            <button onClick={() => this.manejadorOpciones("a")}>A</button>
                            <span>{data[this.state.idx].opciones.a}</span>
                        </div>

                        <div>
                            <button onClick={() => this.manejadorOpciones("b")}>B</button>
                            <span>{data[this.state.idx].opciones.b}</span>
                        </div>
                    </div>
                    <Elecciones
                        propUEleccion={this.state.ultimaOpcion}
                        propHEleccion={this.state.historialElecciones}
                    />

                </div>
            </div>
        )
    };
}