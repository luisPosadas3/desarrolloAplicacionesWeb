import { Component, Input } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compo-hijo',
  standalone: true,
  imports: [[NgForOf, FormsModule,CommonModule]],
  templateUrl: './compo-hijo.html',
  styleUrl: './compo-hijo.css'
})
export class CompoHijo {
@Input() usuarios: any[] = [];
@Input() mostrarTodos: boolean = false;
@Input() mostrarBusqueda: boolean = false;
@Input() usuarioEncontrado : any = null;
} 