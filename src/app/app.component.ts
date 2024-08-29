import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BindeosComponent } from './components/bindeos/bindeos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    LoginComponent,
    BindeosComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  constructor() {
    // Primero.
  }

  ngOnInit() {
    console.log('On init');
  }

  ngOnDestroy() {
    console.log('On destroy');
  }
}
