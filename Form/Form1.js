import React from 'react'
import Form2 from "./Form2"

export default function Form1(props) {
    const {username,password,handleSignUp,handleUserName,handlePassword}=props;
    return (
         <>
        <form>
            Login:<input type="text" value={username} name="username" onChange={handleUserName}/>
            Password:<input type="password"  value={password} name="password" onChange={handlePassword}/>
            <button type="button" onClick={handleSignUp}>Register</button>
                
        </form>        
                
        </>
    )
}
