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
    sweetAlertConfig() {
        swal({
            title: "Entraste a la casa de la bruja.",
            text: "Decidí que vas a hacer: ",
            icon: "warning",
            buttons: {
                escape: "Escapar",
                reinicio: {
                    text: "Volver a empezar",
                    value: "reiniciar",
                },
                "¡Pelear!": true,
            },
        })
            .then((value) => {
                switch (value) {

                    case "¡Pelear!":
                        swal({
                            title: "Derrotaste a la bruja",
                            text: "Luego de engordar a Hansel, la bruja le pide a Gretel preparar el horno. Gretel arpovecha un descuido de la bruja y la encierra, libera a su hermano y juntos escapan de la casita de chocolates. (Lograste el final alternativo)",
                            icon: "info",
                        });
                        break;

                    case "reiniciar":
                        swal("Vuelves a comenzar la historia.");
                        this.setState({ idx: 0 });
                        this.setState({ historialElecciones: [] })
                        break;

                    default:
                        swal({
                            title: "Hansel y Gretel escaparon.",
                            text: "Hansel y gretel se reencuentran con su padre. (Lograste el final feliz)",
                            icon: "info"
                        });
                }
            });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.idx !== this.state.idx) {
            this.state.historialElecciones.push(this.state.ultimaOpcion);
        }

    };
    manejadorOpciones(eleccion) {
        console.log(this.state.idx);
        if (this.state.idx === 7 || this.state.idx === 8) {
            console.log(this.state.historialElecciones);
            this.sweetAlertConfig();
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