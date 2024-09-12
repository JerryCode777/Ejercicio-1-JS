// app.js
const readline = require('readline-sync');
const Contacto = require('./contacto');

// Arreglo para almacenar los contactos
const contactos = [];

// Función para ingresar contactos
function ingresarContactos() {
    console.log("Ingrese los contactos (escriba 'q' en el nombre para salir):");

    while (contactos.length < 100) { // Limitar a 100 contactos
        const nombre = readline.question('Nombre: ');

        if (nombre.toLowerCase() === 'q') break;

        const celular = readline.question('Celular: ');

        const contacto = new Contacto(nombre, celular);
        contactos.push(contacto);
    }
}

// Función para imprimir todos los contactos
function imprimirContactos() {
    console.log("\nContactos ingresados:");
    contactos.forEach(contacto => contacto.mostrar());
}

// Función para buscar un contacto por nombre
function buscarContacto() {
    const nombreBusqueda = readline.question('\nIngrese el nombre del contacto a buscar: ');
    const contacto = contactos.find(c => c.nombre.toLowerCase() === nombreBusqueda.toLowerCase());

    if (contacto) {
        console.log(`Celular de ${nombreBusqueda}: ${contacto.celular}`);
    } else {
        console.log(`Contacto con nombre ${nombreBusqueda} no encontrado.`);
    }
}

// Ejecutar el programa
function main() {
    ingresarContactos();
    imprimirContactos();
    buscarContacto();
}

main();
