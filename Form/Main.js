import React from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import fire from "./fire"
import { useState } from "react"

export default function Main() {
    const [user ,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [click ,setClick]=useState(false);
    const handleSignUp=(event)=>{
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(user, password)
        .then((userCredential) => {
    var user = userCredential.user;
    })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    
  });
}

    const handleUserName=(event)=>{
        const name=event.target.value
        setUser(name);
        setClick(false);
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value);
        setClick(false)

    }
    const handleLogIn=()=>{
        fire.auth().signInWithEmailAndPassword(user, password)
  .then((userCredential) => {
      alert("LogIn succcessful")
    var user = userCredential.user;
    alert("LogIn succcessful")
  
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(error.message)
  });
    }
    const handleLogOut=()=>{
        fire.auth().signOut().then(() => {
        alert("LogOUT succcessful")
}).catch((error) => {
        alert(error.message)
});

    }

    return (
        <>
            <Form1 username={user} password={password} handleUserName={handleUserName} handlePassword={handlePassword} handleSignUp={handleSignUp}/>
            {
                <Form2 username={user} password={password} handleUserName={handleUserName} handlePassword={handlePassword} handleLogIn={handleLogIn} handleLogOut={handleLogOut}/> 
            }
        </>
    )
}
