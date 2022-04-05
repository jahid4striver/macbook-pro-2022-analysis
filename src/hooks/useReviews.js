import { useEffect, useState } from "react"


const useReviews= ()=>{
    const [reviews, setReviews]=useState([]);
    console.log();
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=> res.json())
        .then(data=>setReviews(data));
    },[setReviews])

    return [reviews, setReviews];

};

export default useReviews;