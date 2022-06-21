import React from 'react';
import adhiraj from "../assets/images/adhiraj.jpg";
import './Home.css';

import Form from "./Form/form";
import Posts from "./Post/Posts";



const Home = () => {
    return (
        <div className="container" style={{backgroundColor:"lightblue" , textAlign:"center" }}>
            
            <div className="header col-lg-12">
                <h2 style={{color:"blue" , border: "2px solid green" , fontSize:"30px" , position: "center"}}>  MEMORIES   
                <img src={ adhiraj } alt='adhiraj' className="rounded-circle" style={{height:"50px" , border:"rounded"}}></img></h2> 
            </div>
            <div className="row" style={{backgroundColor:"red"}}>
                <div className="arg">
                    
                    <div className="Post col-lg-9 " style={{backgroundColor:"yellow"}}>
                        <div className="post-md-3" style={{backgroundColor:"orange"}}>
                            <Posts />  
                              
                        </div>
                    </div>

                    <div className="Form col-lg-3">
                        <div className="form-md-3" style={{backgroundColor:"pink"}}>
                            <Form />    
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        
    )
} 

export default Home;