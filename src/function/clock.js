import { useEffect, useState } from "react";

export const NOW_TIME = () =>{

    const [time, setTime] = useState("00:00")

    useEffect(()=>{
        getClock()
    },[])

    function getClock(){
        const date = new Date();
        const Hours = String(date.getHours()).padStart(2,"0");
        const Minutes = String(date.getMinutes()).padStart(2,"0");
        // const second = String(date.getSeconds()).padStart(2,"0");
        setTime(`${Hours}:${Minutes}`)
    }

    setInterval(getClock, 1000)

    return(
        <h1 id="clock">{time}</h1>
    )
}