import React, { useState,useContext } from 'react';

const Login = () => {

    const [usrName,setUsrName]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext

    const handleSubmit=(e)=>{
       e.preventDefault()
       setUser({usrName,password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={usrName} onChange={(e)=>setUsrName(e.target.value)} placeholder='UserName' />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
            placeholder='Password'/>
            <button
            onClick={handleSubmit}
            >submit</button>
        </div>
    );
}

export default Login;
