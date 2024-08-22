'use client'
import { useEffect } from "react"

export default function Error({error,reset}:{
    error : Error,
    reset : () => void
}){
    useEffect(()=>{
        console.log(error);
    },[error]);

    return <>
        <p>Someting went wrong in dashboard.</p>
    </>
}