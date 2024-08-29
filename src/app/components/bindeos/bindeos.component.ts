import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindeos',
  standalone: true,
  imports: [FormsModule], // JAMÁS IMPORTAR APP COMPONENT. ☺
  templateUrl: './bindeos.component.html',
  styleUrl: './bindeos.component.css',
})
export class BindeosComponent {
  title: string = 'Agustín';

  apellido: string = '';
  imagen = 'https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg';

  // Agregar un ! hace que la variable pueda ser nula. apellido!: string

  mostrarDatos() {
    console.log(this.apellido);
  }

  ngOnInit() {
    console.log('On init de bindeos');
  }

  ngOnDestroy() {
    console.log('On destroy de bindeos');
  }
}
