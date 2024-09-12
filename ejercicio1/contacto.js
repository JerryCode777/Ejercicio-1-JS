// contacto.js
class Contacto {
    constructor(nombre, celular) {
        this._nombre = nombre;
        this.celular = celular; // Usa el setter para validar el celular
    }

    // Getter para nombre
    get nombre() {
        return this._nombre;
    }

    // Setter para nombre
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    // Getter para celular
    get celular() {
        return this._celular;
    }

    // Setter para celular
    set celular(nuevoCelular) {
        if (/^\d+$/.test(nuevoCelular)) {
            this._celular = nuevoCelular;
        } else {
            console.error('El número de celular debe contener solo dígitos.');
            this._celular = ''; // Opcional: Establecer un valor predeterminado en caso de error
        }
    }

    // Método para mostrar contacto
    mostrar() {
        console.log(`Nombre: ${this.nombre}, Celular: ${this.celular}`);
    }
}

module.exports = Contacto;
