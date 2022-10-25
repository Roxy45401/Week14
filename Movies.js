import React from 'react';
import MovieList from './MovieList';
import ReviewList from './ReviewList';
import Stars from './Stars';
import Corps from './Corps';


export default class Movies extends React.Component {
    render () {
    return <>
        <div className="container-flex  text-white bg-dark">
            <h3></h3>
            <MovieList/>
            <br/>
            <br/>
            <ReviewList/>
        </div>
    </>;
  }
}