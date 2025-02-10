import React, {useState } from "react";
import userContext from "./userContext";

const UserContextProvider=({children}) =>{
    const [user,setUser]=useState(null)

    return(
        <userContext.Provider>
            {children}
        </userContext.Provider>
    )
}