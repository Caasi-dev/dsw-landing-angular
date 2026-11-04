import { Component } from '@angular/core';

@Component({
  selector: 'app-documentacion-screen',
  imports: [],
  templateUrl: './documentacion-screen.html',
  styleUrl: './documentacion-screen.scss'
})
export class DocumentacionScreen {
  urlDocumentacion = 'https://angular.dev';

  diapositivas = [
    { titulo: 'Node.js', imagen: 'assets/images/node.png' },
    { titulo: 'TypeScript', imagen: 'assets/images/ts.png' },
    { titulo: 'Angular', imagen: 'assets/images/angular.png' },
    { titulo: 'NPM', imagen: 'assets/images/npm.png' }
  ];
}
