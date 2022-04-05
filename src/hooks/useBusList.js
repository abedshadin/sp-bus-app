import { useEffect, useState } from "react";

const useBusList = ()=>{
    const [buses,setBuses] = useState([]);
    useEffect(()=>
    fetch('https://raw.githubusercontent.com/abedshadin/sp-bus-app/main/data.json')
    .then(res=>res.json())
    .then(data=>setBuses(data))
    ,[]);
    return [buses,setBuses];
}


export default useBusList;