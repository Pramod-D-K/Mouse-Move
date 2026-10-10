import { useState } from "react";
import { MouseMove } from "./Components/MouseMove";


export function Mouse(){

    const[display, setDisplay]=useState(true);
    const[d, setD]=useState("Un-Display");

    function dFun(){
        if(display){
            setDisplay(!display);
            setD("Display");
        }else{
            setDisplay(!display);
            setD("UnDisplay");
        }
    }
    
    return(
        <>
        <button type="button" 
        style={{color:"red"}}
        onClick={
            dFun
        }
        >{d}</button>
        {display &&<MouseMove/>}
        </>
    )



    // if(display){
    //     return(
    //     <>
    //     <button type="button" 
    //     onClick={()=>setDisplay(!display)}
    //     >Click</button>
    //     <MouseMove/>
    //     </>
    // )
    // }
    // else{
    //     return(
    //     <>
    //     <button type="button" 
    //     onClick={()=>setDisplay(!display)}
    //     >Click</button>
    //     </>
    // )
    // }
    
};