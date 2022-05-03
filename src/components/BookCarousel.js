// https://www.npmjs.com/package/react-alice-carousel
// check licensing

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AliceCarousel, { Classnames } from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import GenresLogo from './Assets/Genres_logo.png';



const useStyles = makeStyles({
    root: {
        infinite: true
    }
});


const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={GenresLogo} onDragStart={handleDragStart} />,
  <img src={GenresLogo} onDragStart={handleDragStart} />,
  <img src={GenresLogo} onDragStart={handleDragStart} />,
];

const BookCarousel = () => {
    const classes = useStyles();
    return (
        <AliceCarousel
            mouseTracking items={items} 
            infinite={true}
        />
  );
}

// const Cards = () => {
//     const classes = useStyles();
//     var items = [
//         {
//             name: "Random Name #1",
//             description: "Probably the most random thing you have ever seen!"
//         },
//         {
//             name: "Random Name #2",
//             description: "Hello World!"
//         }
//     ]

//     return (
//         <Carousel>
//             {
//                 items.map( (item, i) => <Item key={i} item={item} /> )
//             }
//         </Carousel>
//     )
// }

// function Item(props)
// {
//     return (
//         <Paper>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Paper>
//     )
// }

export default BookCarousel