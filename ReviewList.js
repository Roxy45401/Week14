import React from 'react'
import Corps from './Corps'
import Stars from './Stars'
import Conjuring from './Conjuring'
import Saw from './Saw'
import Silence from './Silence'
import SectionComment from './CommentBox'



export default class ReviewList extends React.Component {
    render () {
        
     return (
        <>
            <h2 className="m-2">Silence Of The Lambs</h2>
            <p className="m-2">1991 ‧ Thriller/Horror ‧ 1h 58m</p>
            <div className="card w-100 text-danger " > 
            <Silence/>
            </div>
            <br/>
            <br/>
            <br/>
            <h2 className="m-2">The Conjuring</h2>
            <p className="m-2">2013 ‧ Horror/Thriller ‧ 1h 52m</p>
            <div className="card w-100 text-dark " > 
            <Conjuring/>
            </div>
            <br/>
            <br/>
            <br/>
            <h2 className="m-2">Saw</h2>
            <p className="m-2">2004 ‧ Horror/Thriller ‧ 1h 43m</p>
            <div className="card w-100 text-danger " > 
            <Saw/>
            </div>
            <br/>
            <br/>
            <br/>
            <h2 className="m-2">The Nightmare Before Christmas</h2>
            <p className="m-2" >1993 ‧ Fantasy/Musical ‧ 1h 16m</p>
            <div className="card w-100 text-danger " > 
            <Corps/>
            </div>
            <br/>
            <br/>
            <br/>
           
        </>
        )
    }
}