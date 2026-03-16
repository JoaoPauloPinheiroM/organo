import { Component } from '@angular/core';
import { CabechalhoComponent } from './components/cabechalho/cabechalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CabechalhoComponent, RodapeComponent, ListaLivrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'organo';
}
