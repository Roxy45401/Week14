import React from "react";
import MovieList from "./Components/MovieList";
import ReviewList from "./Components/ReviewList";

export default class App extends React.Component {
  constructor (props) {
    super (props);
      this.state = {
        movielist: [ 
          {
            id:0,
            name:"movie list- not in order",
            messages: [
              { 
                  id:0,
                  title: 'Saw',
                  text:'2004',
                  unread: true
              },
              {
                  id:1,
                  title: 'Halloween',
                  text:'1999',
                  unread: false
              }
            ]
          },
          {
            id:3,
            name:'random',
            messages: []
          },
          {
            id:4,
            name:'general',
            messages:[
              {
                    id:0,
                    title: 'Nightmare On Elm Street',
                    text: '1984',
                    unread: false
              }
            ]
          }
        ] 
      }
  }
  
  render () {
    

    return (
      <div className= "container">
        <div className="row">
          <MovieList movieList={this.state.movielist}/>
        
        </div>
      </div>
    )
  }
}

  