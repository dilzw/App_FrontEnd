"use client";

import React from 'react'
import { GlobalProvider } from "@/app/context/globalProvider";
interface Props{

    children:React.ReactNode;
}

export default function ContextProvider({children}:Props) {

const [isRedy,setIsRedy] =React.useState(false);
    React.useEffect(()=> {
        setTimeout(()=>{
            setIsRedy(true);
        },200);
    },[]);

    if(!isRedy){
        return null;
    }


  return (
    <GlobalProvider>{children}</GlobalProvider>
  )
}





