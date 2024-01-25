
import { AppState } from "../AppContext";


export default function TopBar(){
  const {theme, setTheme} = AppState();
   return( 
   <div>
      <div className="navbar bg-base-100">
  <div className="flex-none gap-2">
   <h1 className="t">TEAM HOSPITAL</h1>
    <div className="theme">
   {
   theme === "dark"? (
   <button className=" ss btn btn-accent m-1 " onClick={()=>setTheme("light")}>
    Light<br/>
    </button>
    ):(
    <button 
    className="btn btn-error m-1" onClick={()=>setTheme("dark")} 
    >Dark</button>
     )

   }
      
     
     
     
       {/* <button className="btn btn-secondary" onClick={()=>setTheme("dark")} >Dark</button */}
  

      </div>   
    </div>
  </div>
</div>
  
   )
}