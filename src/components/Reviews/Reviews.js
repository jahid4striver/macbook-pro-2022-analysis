import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews]= useReviews();
    console.log(reviews);
    return (
        <div>
            <h1>Reviews Of Our Honorable Customers</h1>
            <div className='container row mt-5'>
            {
                reviews.map(review=><Review review={review} key={review.id}/>)
            }
            </div>
            <Link to='/reviews'><button className='btn btn-lg btn-warning fw-bold'>Show All Reviews</button></Link>
        </div>
    );
};

export default Reviews;