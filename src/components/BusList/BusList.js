import React, { useEffect, useState } from 'react';
import Bus from '../Bus/Bus';
import './BusList.css'
import { useRef } from "react";

const BusList = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const clickPoint = useRef();
    const handleFocus = () => {
        clickPoint.current.style.display = "none";
    };

    const handleBlur = () => {
        clickPoint.current.style.display = "block";
    };
    useEffect( () =>{

        fetch('https://abedbd.xyz/data.json')
        .then(res => res.json())
        .then(data => {
            const match = data.filter(d => d.b_name.toLowerCase().includes(searchText.toLowerCase()));
            setSearchResult(match);
            console.log(data);
        })
    }, [searchText])

    const handleSearchChange = event =>{
        const text = event.target.value;
        setSearchText(text);
        
    }
    return (
       <div className='text-center text-black'>
         <div className="items-center  px-4 flex justify-center mb-2 pt-2" >
            <div className="relative mr-3">
                <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                    placeholder="Search Here..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleSearchChange}
                />
            </div>
</div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
           
            {
                searchResult.map(bus=><Bus key={bus.b_id} bus={bus}></Bus>)
            }
        </div>
        </div>
    );
};

export default BusList;