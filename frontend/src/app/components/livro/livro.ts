export interface Livro {
  id: number;
  titulo: string;
  autoria: string;
  genero: Genero;
  imagem: string;
  favorito: boolean;
}

export interface Genero {
  id: string;
  value: string;
  Livros: Livro[];
}
