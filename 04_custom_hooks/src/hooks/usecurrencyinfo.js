import {useState, useEffect} from 'react';

function usecurrencyinfo(currency){

    const[data,setData]=useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response)=>response.json())
        .then((response) => setData(response) )
    },[]);

}
//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json