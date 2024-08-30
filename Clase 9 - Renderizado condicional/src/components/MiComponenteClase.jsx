import { Component } from "react";

class MiComponenteClase extends Component {
    constructor(props) {
        super(props);
        this.state = { contador: 0 };
        this.incrementarContador = this.incrementarContador.bind(this);
    }

    incrementarContador() {
        this.setState({ contador: this.state.contador + 1 });
    }

    componentWillUnmount() {
        console.log("El componente se ha desmontado");
    }

    render() {
        return (
            <div>
                <h1>Contador: {this.state.contador}</h1>

                <button onClick={this.incrementarContador}>Incrementar contador</button>
            </div>
        );
    }
}

export default MiComponenteClase;
