import React from 'react'
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";



function Stars() {

    return (
  
      <div className="Stars">
        <header className="App-header">
          <h5 >How would you rate this movie?</h5>
          <Stack spacing={2}>
          <Rating name="size-large" defaultValue={5} size="large" />
          </Stack>
        </header>
      </div>
    );
  }


  export default Stars;