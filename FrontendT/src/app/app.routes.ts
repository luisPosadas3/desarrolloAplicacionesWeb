import { Routes } from '@angular/router';

import { Home } from '../components/home/home';
import { UserProfile } from '../components/user-profile/user-profile';
import { Acerca } from '../components//acerca/acerca';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirección inicial
  { path: 'home', component: Home },
  { path: 'usuarios', component: UserProfile },
  { path: 'acerca', component: Acerca },
  { path: '**', redirectTo: '/home' } // ruta por defecto si no existe
];