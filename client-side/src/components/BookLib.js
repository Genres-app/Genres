import React, { useState, useEffect } from 'react';

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
    author: 'author1',
    genres: ['Action', 'Sci-Fi'],
    cover: cover1,
    info: 'Description of the book1',
  },
  '0002': {
    title: 'The Arrivals',
    author: 'Lucas LLoyd',
    genres: ['Thriller', 'Sci-Fi'],
    cover: cover2,
    info: 'Description of the book2',
  },
}