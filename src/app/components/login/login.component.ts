import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  atributo = 'algo';

  ngOnInit() {
    console.log('On init del login');
  }

  ngOnDestroy() {
    console.log('On destroy del login');
  }
}
