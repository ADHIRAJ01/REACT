import React , { useState }from 'react';
import HoCss from './Css/Form.module.css';
import './Css/Form.css';

const Form = () => {
    const [ name , setName ] = useState(""); 
    const [ lname , setLname ] = useState("");  
    const [ psw , setPwd ] = useState("");
    const [ msg , setMsg ] = useState(""); 
    const [ file , setFile ] = useState(false);
    
    const post = useState({name: "", setName: "", setLname: "", setpwd: "", setMsg: "", setFile: ""});

    const handleSubmit = (event) => {
        event.preventDefault();
        setName(event.target.value);
        console.log(" name " ,name);
        console.log(" LASTNAME ", lname);
        console.log(" PASSWORD ", psw);
        console.log(" MESSAGE ", msg);
        console.log("file available ", file);

        console.log("posts = ", ...post , name);
    }

    const handleChange = (event) => {
        let target = event.target;

        console.log(target);
        
        if(target.name === 'fname'){
            setName(event.target.value);
        }

        if(target.name === 'lastname'){
            setLname(event.target.value);
        }

        if(target.name === 'psw'){
            setPwd(event.target.value);
        }

        if(target.name === 'message'){
            setMsg(event.target.value);
        }

        if(target.name === 'file'){
            setFile(true);
        }

        console.log("NAME = " , name);
        console.log("LASTNAME = " , lname);
        console.log("PASSWORD", psw);	
        console.log("MESSAGE = " , msg);
        console.log("file is = " , file);
        
    }

    const clear = () => {
        console.log("clear pressed");
    }

    return (
        <div className="Mdv">
            <h1>CREATE A MEMORY</h1>



            <form onSubmit={handleSubmit}>   
                
                <label for="name">
                    <input type="text"  placeholder="First name" name="fname" label="First name" onChange={handleChange}  />
                </label>        
                
                <br /><br />

                <label for="lastname">
                    <input type="text" name="lastname" placeholder="last name"  onChange={handleChange}  />
                </label>  

                <br /><br />

                <label for="password">
                    <input type="password" name="password" placeholder="password here " onChange={handleChange}  />
                </label>   
               
                <br /><br />

                <label for="message">
                    <input type="textarea" name="message" placeholder="text message"  onChange={handleChange}  />
                </label>               
              
                <br /><br />

                <input type="file" name="file" onChange={handleChange} />
                
                <br /><br />

                <button type="submit" name="SUBMIT" style={{backgroundColor: 'blue', width: '80%' , color: 'white'}}>SUBMIT</button>
                <br /><br />

                <button type="submit" name="CLEAR" style={{backgroundColor: 'red', width: '80%' , color: 'white'}} onClick={clear()}>CLEAR</button>
            </form>

           
         </div>   
           
      

    )
}

export default Form;