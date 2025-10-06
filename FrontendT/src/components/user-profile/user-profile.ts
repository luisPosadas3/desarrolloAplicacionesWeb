import { Component } from '@angular/core';
import {data} from '../data';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompoHijo } from '../compo-hijo/compo-hijo';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NgIf ,  FormsModule, CommonModule, CompoHijo],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {
  datos = new data();
  masde1 = false;
  usuarios: any[] = [];
  
  opcionSeleccionada: string = '';
  idEscrito: string = '';
  usuarioEncontrado: any = null;
  mostrarId = false;
  mostrarInput = false;
  mostrarTodos = true;
  mostrarBusqueda = false;
  modificarAutorizado = false;
  user = {
    id : this.datos.listUsers[0].id,
    nombre: this.datos.listUsers[0].nombre,
    edad: this.datos.listUsers[0].edad,
    email: this.datos.listUsers[0].email
  }
  nuevoUsuario ={
    id: '', nombre: '', edad: '', email: ''
  };


  ngOnInit() : void{

    this.usuarios = this.datos.getAll();
  }

  mostrar(){
    this.mostrarTodos = true;
    this.mostrarBusqueda = false;
  }

  verificarBotones(){
    this.modificarAutorizado = false;
    if(this.opcionSeleccionada == "insert"){
      this.mostrarInput = true;
      this.mostrarId = true;
    }else if(this.opcionSeleccionada == "delete" || this.opcionSeleccionada == "read" || this.opcionSeleccionada == "update"){
      this.mostrarId = true;
      this.mostrarInput = false;
    }
    this.limpiar();
  }

  limpiar(){
    this.idEscrito = "";
    this.nuevoUsuario.nombre = "";
    this.nuevoUsuario.edad = "";
    this.nuevoUsuario.email= "";
  }

  realizarAccion(){
  if (this.opcionSeleccionada == "read") {
  this.usuarioEncontrado = this.usuarios.find(u => u.id == Number(this.idEscrito));
  this.mostrarBusqueda = true;
  this.mostrarTodos = false;
  this.limpiar();
}
    if(this.opcionSeleccionada == "insert"){
      this.nuevoUsuario = {
        id: this.idEscrito,
        nombre: this.nuevoUsuario.nombre,
        edad: this.nuevoUsuario.edad,
        email: this.nuevoUsuario.email
      }
      this.usuarios.push({...this.nuevoUsuario});
      this.limpiar();
    }
    if(this.opcionSeleccionada == "delete"){
      this.usuarios = this.usuarios.filter(u => u.id != Number(this.idEscrito)); 
      this.limpiar();
    }
    if(this.opcionSeleccionada == "update"){
       const usuario = this.usuarios.find(u => u.id == Number(this.idEscrito));
  if (usuario) {
    this.usuarioEncontrado = usuario;
    this.mostrarInput = true;
    this.modificarAutorizado = true;

    this.nuevoUsuario = {
      id: usuario.id,
      nombre: usuario.nombre,
      edad: usuario.edad,
      email: usuario.email
    };
  } else {
    alert("Usuario no encontrado");
  }
    }
  }

  confirmarModificacion() {
  const index = this.usuarios.findIndex(u => u.id == this.usuarioEncontrado.id);
  if (index !== -1) {
    this.usuarios[index] = { ...this.nuevoUsuario };
    this.modificarAutorizado = false;
    this.limpiar();
    this.usuarioEncontrado = null;
    this.mostrarInput = false;
    alert("Usuario modificado con exito");
  } else {
    alert("Error: usuario no encontrado");
  }
  
}
  
}
