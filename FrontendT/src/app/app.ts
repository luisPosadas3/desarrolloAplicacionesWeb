import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from '../components/encabezado/encabezado';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EncabezadoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bienvenidos todos');
}
