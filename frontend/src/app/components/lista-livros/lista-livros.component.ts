import { LIVROS } from '../../mock-livros';
import { Genero, Livro } from './../livro/livro';
import { Component, OnInit } from '@angular/core';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario.component';

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css',
})
export class ListaLivrosComponent implements OnInit {
  generos: Genero[] = [];

  livrosPorGenero: Map<string, Livro[]> = new Map<string, Livro[]>();
  ngOnInit(): void {
    // Agrupar os livros por gênero

    /*
       Crio um map, logo depois pecorro a lista de livros e capturo
       o id do genero e verifico se esse genero está no meu map, caso não esteja eu crio um array vazio para esse genero,
        e depois adiciono o livro nesse genero. 
        em seguida eu filtro pelo genero e add o livro no seu respectivo genero dentro do meu map.
    */
    this.livrosPorGenero = new Map<string, Livro[]>();
    LIVROS.forEach((livro) => {
      const generoId = livro.genero.id;
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, []);
      }

      this.livrosPorGenero.get(generoId)?.push(livro);
    });

    this.generos = [
      {
        id: 'fantasia',
        value: 'Fantasia',
        Livros: this.livrosPorGenero.get('fantasia') || [],
      },
      {
        id: 'suspense',
        value: 'Suspense',
        Livros: this.livrosPorGenero.get('suspense') || [],
      },
      {
        id: 'fabula',
        value: 'Fábula',
        Livros: this.livrosPorGenero.get('fabula') || [],
      },
      {
        id: 'ficcao',
        value: 'Ficção Científica',
        Livros: this.livrosPorGenero.get('ficcao') || [],
      },
    ];
  }
}
