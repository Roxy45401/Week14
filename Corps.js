import React from 'react'
import Stars from './Stars'
import CommentBox from './CommentBox';


function Corps () {
console.log(Corps);
return (
    <>
        <div className="App text-bg-dark m-1">
            <img className="m-5" src="https://m.media-amazon.com/images/M/MV5BMTI3NDU5NzU3OF5BMl5BanBnXkFtZTcwMzIxNzgyMw@@._V1_.jpg"  alt="Corps IMG" height={250} weight={250}/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcBRymX8HWY9lvthnSq6McteVI-82rMSjiQ&usqp=CAU"  alt="Corps IMG" height={250} weight={250}/>
            <p className="m-2">The film follows the misadventures of Jack Skellington, Halloweentown's beloved pumpkin king, who has become bored with the same annual routine of frightening people in the "real world." When Jack accidentally stumbles on Christmastown, all bright colors and warm spirits, he gets a new lease on life -- he plots to bring Christmas under his control by kidnapping Santa Claus and taking over the role. But Jack soon discovers even the best-laid plans of mice and skeleton men can go seriously awry.</p>
            <CommentBox/>
        </div>
    </>
);
}


export default Corps;