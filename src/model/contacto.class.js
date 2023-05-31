export class contacto {
    nombre = '';
    apellido = '';
    Email = '';
    Conectado = true;

    constructor(nombre, apellido, Email, Conectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.Email = Email;
        this.Conectado = Conectado
    }
}