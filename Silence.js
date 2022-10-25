import React from 'react'
import { blue } from '@mui/material/colors';
import CommentBox from './CommentBox';


function Silence () {
console.log(Silence);
return (
    <>
        <div className="Silence text-bg-dark m-1">
            <img className="m-2" src="https://quartetrecords.com/wp-content/uploads/2021/02/SILENCE-OF-THE-LAMBS.jpg"  alt="Silence IMG" height={300} weight={300} />
            <img src="http://2.bp.blogspot.com/-aZKks6s13B0/UNoup99q0xI/AAAAAAAAN4k/kI3QucwsWXY/s1600/SILENCE+OF+THE+LAMBS+13a.jpg" alt="Body"height={300} weight={300}/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmhJbirlyzvdCNUodDTZ_vgXUhHjrFwysX2Q&usqp=CAU" alt="Anthony" height={300} weight={300}/>
            <br/>
            <p className="m-2">Jodie Foster stars as Clarice Starling, a top student at the FBI's training academy. Jack Crawford (Scott Glenn) wants Clarice to interview Dr. Hannibal Lecter (Anthony Hopkins), a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.</p>
            <CommentBox/>
        </div>
    </>
);
}

export default Silence;