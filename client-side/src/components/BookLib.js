import cover1 from './Assets/bookcover1.jpg';
import cover2 from './Assets/bookcover2.jpg';
import cover3 from './Assets/bookcover3.jpg';
import cover4 from './Assets/bookcover4.jpg';
import cover5 from './Assets/bookcover5.jpg';
import cover6 from './Assets/bookcover6.jpg';
import cover7 from './Assets/bookcover7.jpg';

export const BookLib = {
  '0001': {
    title: 'Hungry Bird',
    author: [1],
    genres: ['Action', 'Sci-Fi'],
    cover: cover1,
    status: 1,
    info: 'Description of the book1',
  },
  '0002': {
    title: 'The Arrivals',
    author: [2, 4, 5, 1,3],
    genres: ['Thriller', 'Sci-Fi'],
    cover: cover2,
    status: 0,
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis elit, pulvinar vel tellus ut, congue ultricies elit. Fusce tristique velit dolor, eget interdum risus dictum vitae. Nam sapien quam, vestibulum non viverra a, rhoncus id leo. Quisque feugiat est orci, nec mollis eros convallis ac. Aenean varius enim dolor, at consequat libero consequat id. Sed consequat, felis vel faucibus interdum, urna justo lobortis nulla, quis suscipit diam libero id nulla. Duis eu purus ut tellus laoreet sollicitudin. Suspendisse id imperdiet lorem, tempor hendrerit tellus. Donec tincidunt mi quis neque vulputate, quis scelerisque metus rhoncus.',
  },
  '0003': {
    title: 'Mystic Emperors of the Deep',
    author: [3],
    genres: ['Thriller', 'Sci-Fi'],
    cover: cover3,
    status: -1,
    info: 'Description of the book3',
  },
  '0004': {
    title: 'Between Belief and Prayers',
    author: [4],
    genres: ['Thriller', 'Sci-Fi'],
    cover: cover4,
    status: 1,
    info: 'Description of the book4',
  },
  '0005': {
    title: 'Over The Clouds',
    author: [5],
    genres: ['Thriller', 'Sci-Fi'],
    cover: cover5,
    status: 1,
    info: 'Description of the book5',
  },
  '0006': {
    title: 'Gleo',
    author: [6],
    genres: ['Thriller', 'Sci-Fi'],
    cover: cover6,
    status: 0,
    info: 'Description of the book6',
  },
  '0007': {
    title: 'The Man From Nowhere',
    author: [2, 1],
    genres: ['Thriller', 'Sci-Fi'],
    cover: cover7,
    status: -1,
    info: 'Description of the book7',
  },
}