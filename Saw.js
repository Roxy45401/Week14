import { blue } from '@mui/material/colors';
import React from 'react'
import CommentBox from './CommentBox';



function Saw () {
console.log(Saw);
return (
    <div className="Saw text-bg-dark m-1">
        <img className="m-2" src="https://m.media-amazon.com/images/M/MV5BNjc0NjUyNzg3MF5BMl5BanBnXkFtZTYwODMxOTM3._V1_.jpg"  alt="Saw IMG" height={350} weight={350}/>
        <img src="https://cdn.vox-cdn.com/thumbor/FpWMMU1-nK_VCj826xWU1riSoB8=/0x0:2343x1477/1200x0/filters:focal(0x0:2343x1477):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22512687/Jigsaw.jpeg" alt="2"height={300} weight={300}/> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkoL7V9uwuQY3Rvp16lXosZS0wpLCBSDY71Q&usqp=CAU" alt="2"height={300} weight={300}/>
        <p className="m-2">Photographer Adam Stanheight (Leigh Whannell) and oncologist Lawrence Gordon (Cary Elwes) regain consciousness while chained to pipes at either end of a filthy bathroom. As the two men realize they've been trapped by a sadistic serial killer nicknamed "Jigsaw" and must complete his perverse puzzle to live, flashbacks relate the fates of his previous victims. Meanwhile, Dr. Gordon's wife (Monica Potter) and young daughter (Makenzie Vega) are forced to watch his torture via closed-circuit video.</p>
        <CommentBox/>
    </div>
);
}

export default Saw;