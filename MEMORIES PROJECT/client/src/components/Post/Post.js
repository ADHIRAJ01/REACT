import React , { useState , useEffect } from 'react';
// import HoCss from "./css/Post.module.css";
import './css/Post.css';
// import useState from 'react';
const Post = () => {

    const [ data , setData] = useState();
    // const [ loading , setLoading ] = useState("loaading...");
    const [ errr, setError ] = useState("error");
    // const number = 2;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch( error  => {
                setError(error);
        });
    });
    

    console.log(data);
    console.log(errr);
    

    return (

        <div className="Postcss">
            <h1>THIS IS THE POST </h1>
            {data.map((item) => {
                return (
                    <div>
                        {item.id} 
                        <h2>{item.title}</h2>
                    </div>
                )}
            )}
        </div>
    )
};

export default Post;
