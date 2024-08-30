class Carro {
    modelo = "";
    marca = "";
    color = "";

    constructor(modelo, marca, color) {
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
    }

    encender() {
        console.log("El carro está encendido");
    }
}

const carro = new Carro("A3", "Audi", "Rojo");
console.log(carro.modelo);

carro.encender;
