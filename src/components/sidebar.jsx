import { useNavigate } from "react-router-dom"

export default function SideBar(){
  const navigate = useNavigate();
     return( 
   <div className="side-bar">
    <div>
      {/* <ul className="action">
        <li><button className="btn btn-primary" onClick={()=>navigate("/StatePage")}>State</button></li>

        <li><button className="btn btn-primary" onClick={()=>navigate("/login")}>Login</button></li>
        <li><button className="btn btn-primary" onClick={()=>navigate("/Logout")}>Logout</button></li>
        <li><button className="btn btn-primary" onClick={()=>navigate("/Redux")}>Redux</button></li>
      </ul> */}
    </div>
   </div>
   )
}

