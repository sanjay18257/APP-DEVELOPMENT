import { createContext,useContext, useMemo, useState } from "react";
export const UserContext=createContext();
export const useUser=()=>{
    return useContext(UserContext);
}
const UserProvider=({children})=>{
    const[isUserLoggeIn,setIsUserLoggedIn]=useState(false);
    const login=()=>{
        setIsUserLoggedIn(true);
    }
    const logout=()=>{
        setIsUserLoggedIn(false);
    }
    const userValue=useMemo(()=>(
        {
            isUserLoggeIn,login,logout
        }
    ),[isUserLoggeIn]);
    return(
        <UserContext.Provider value={userValue}>
            {children}
        </UserContext.Provider>
    )
}