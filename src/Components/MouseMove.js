import { useEffect, useState } from "react"





export function MouseMove(){
    const[x,setX]=useState(0);
    const[y,setY]=useState(0);


    useEffect(()=>{
        console.log("mount");
        window.addEventListener('mousemove',(event)=>{
            setX(event.clientX);
            setY(event.clientY);
        })

        return()=>{
            console.log("unmount");
            window.removeEventListener('mousemove',(event)=>{
            setX(event.clientX);
            setY(event.clientY);
        })
        }
    },[x, y]);

    return(
        <>
        <h2>X - {x} : Y - {y}</h2>        
        </>
    )
}