import { useEffect, useState } from "react";

const useBusList = ()=>{
    const [buses,setBuses] = useState([]);
    useEffect(()=>
    fetch('https://abedbd.xyz/data.json')
    .then(res=>res.json())
    .then(data=>setBuses(data))
    ,[]);
    return [buses,setBuses];
}


export default useBusList;