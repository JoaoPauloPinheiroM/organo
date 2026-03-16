import { Livro } from './components/livro/livro';

export const LIVROS: Livro[] = [
  {
    id: 1,
    titulo: 'O Senhor dos Anéis',
    autoria: 'J.R.R. Tolkien',
    genero: {
      id: 'fantasia',
      value: 'Fantasia',
      Livros: [],
    },
    imagem:
      'https://i.pinimg.com/736x/9f/8e/dd/9f8edd5cd1a6884960ebfcf820fb2d9f.jpg',
    favorito: true,
  },
  {
    id: 2,
    titulo: 'Harry Potter e a Pedra Filosofal',
    autoria: 'J.K. Rowling',
    genero: {
      id: 'fantasia',
      value: 'Fantasia',
      Livros: [],
    },
    imagem:
      'https://i.pinimg.com/1200x/af/24/f9/af24f9cf0942c17966cd15ab8bb73cf1.jpg',
    favorito: false,
  },
  {
    id: 3,
    titulo: 'O Código Da Vinci',
    autoria: 'Dan Brown',
    genero: {
      id: 'suspense',
      value: 'Suspense',
      Livros: [],
    },
    imagem:
      'https://i.pinimg.com/1200x/ca/bc/e6/cabce6c188d639173908ba40935e1a07.jpg',
    favorito: false,
  },
  {
    id: 4,
    titulo: 'A Guerra dos Tronos',
    autoria: 'George R.R. Martin',
    genero: {
      id: 'fantasia',
      value: 'Fantasia',
      Livros: [],
    },
    imagem:
      'https://i.pinimg.com/736x/a7/cf/9b/a7cf9bba4a01d7925bd355cd8867432c.jpg',
    favorito: false,
  },
  {
    id: 5,
    titulo: 'O Pequeno Príncipe',
    autoria: 'Antoine de Saint-Exupéry',
    genero: {
      id: 'fabula',
      value: 'Fábula',
      Livros: [],
    },
    imagem:
      'https://i.pinimg.com/736x/d4/eb/bf/d4ebbfd069b9f589ffa64ab23f515a3c.jpg',
    favorito: false,
  },
  {
    id: 6,
    titulo: 'O Hobbit',
    autoria: 'J.R.R. Tolkien',
    genero: {
      id: 'fantasia',
      value: 'Fantasia',
      Livros: [],
    },
    imagem:
      'https://i.pinimg.com/736x/ec/92/b5/ec92b5f8b9e8380b93e5a2f4598cf65c.jpg',
    favorito: false,
  },
  // {
  //   id: 7,
  //   titulo: 'O Alquimista',
  //   autoria: 'Paulo Coelho',
  //   genero: {
  //     id: 'ficcao',
  //     value: 'Ficção',
  //     Livros: [],
  //   },
  //   imagem:
  //     'https://i.pinimg.com/1200x/2e/35/94/2e359491ffefa5de59c11016668ab7da.jpg',
  //   favorito: true,
  // },
];
