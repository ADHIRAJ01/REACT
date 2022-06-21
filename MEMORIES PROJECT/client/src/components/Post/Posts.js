import React from 'react';
import Post from './Post';
// import { Card , Row } from 'react-bootstrap';

const Posts = () => {   
    return(
        <>
            <h2>HERE WE WILL DISPLAY ALL POSTS </h2>
            
            <div className="card">
                <Post />    
            </div>
            {/* fetching data after creatng component  */}
            
            
           
        </> 
    )
}

export default Posts;