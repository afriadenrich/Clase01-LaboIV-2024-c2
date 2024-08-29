export class Usuario {
  private nombre: string = '';
  private apellido: string = '';

  constructor() {}

  obtenerNombre(): string {
    return this.nombre;
  }
}
