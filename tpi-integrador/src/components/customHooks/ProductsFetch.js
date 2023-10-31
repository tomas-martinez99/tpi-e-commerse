import React, { useEffect, useState } from 'react'

export const ProductsFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
    },[])


  return {data}
  
  
}
