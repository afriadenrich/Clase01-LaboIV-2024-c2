import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BindeosComponent } from './components/bindeos/bindeos.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bindeos', component: BindeosComponent },
];
