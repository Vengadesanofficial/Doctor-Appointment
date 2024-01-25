import { useState } from "react";
import { loginUser } from "./Reducers.jsx/LoginReducer.file";
import { useDispatch } from "react-redux";

const RegisterForm=()=>{
    const[username,setUserName]=useState("")
    const[mail,setMail]=useState("")
    const[passWord,setPassWord]=useState("")
    const dispatch = useDispatch()

    const handleLogin =()=>{
        const userData={
            mail,
            passWord,
        };
        console.log(userData)
        dispatch(loginUser(userData))
    }
    return(<div className="grid grid-row-3 justify-center mt-24 gap-3 h-52">
          <input type="text"
      placeholder="UserName" 
      className="input input-bordered w-80" 
      value={username}
       onChange={(e)=>setUserName(e.target.value)}/>

     <input type="Email"
      placeholder="Enter Mail" 
      className="input input-bordered w-80" 
      value={mail}
       onChange={(e)=>setMail(e.target.value)}/>

       <input type="Password" 
       placeholder="Enter Passowrd"
        className="input input-bordered w-80"
         value={passWord}
          onChange={(e)=>setPassWord(e.target.value)}/>
          <button className="btn btn-primary "onClick={handleLogin}>LOGIN</button>

        
    </div>)
}

export default RegisterForm;