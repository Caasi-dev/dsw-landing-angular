import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-screen',
  imports: [],
  templateUrl: './perfil-screen.html',
  styleUrl: './perfil-screen.scss'
})
export class PerfilScreen {
  perfil = {
    nombre: 'Isaac Sánchez Flores',
    email: 'sanchezisaac309@gmail.com',
    telefono: '22134483123',
    direccion: 'Calle los Pinos, Puebla. Pue',
    nacimiento: '25/01/2006'
  };
}
