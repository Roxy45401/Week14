import { blue } from '@mui/material/colors';
import React from 'react';
import CommentBox from './CommentBox';


function Conjuring () {
return (
    <div className="App text-bg-dark m-1">
        <img  className="m-4" src="https://i0.wp.com/www.horrorhomeroom.com/wp-content/uploads/2015/05/3221453-the_conjuring_movie-wide.jpg?fit=1000%2C668"  alt="Corps IMG" height={300} weight={350}/>
        <img src="https://discussingfilm.net/wp-content/uploads/2021/06/20210617_201231.jpg" alt="Anabelle" height={300} weight={300}/>
        <p className="m-3">In 1970, paranormal investigators and demonologists Lorraine (Vera Farmiga) and Ed (Patrick Wilson) Warren are summoned to the home of Carolyn (Lili Taylor) and Roger (Ron Livingston) Perron. The Perrons and their five daughters have recently moved into a secluded farmhouse, where a supernatural presence has made itself known. Though the manifestations are relatively benign at first, events soon escalate in horrifying fashion, especially after the Warrens discover the house's macabre history.</p>
        <CommentBox/>
    </div>
);
}

export default Conjuring;