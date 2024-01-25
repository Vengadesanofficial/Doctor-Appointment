import { useContext } from "react";
import {React, useState,createContext} from "react";

const AppCtx = createContext(null);
const AppContext=({children})=>{
const [theme, setTheme]=useState("dark");
    return(
        
        <AppCtx.Provider 
      value ={
        {
            theme, setTheme
        }
      }
        >
           {children} 


        </AppCtx.Provider>
    )
}

export const AppState=()=>{
    return useContext(AppCtx)
}
export default AppContext;