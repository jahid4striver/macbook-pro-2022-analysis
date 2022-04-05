import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews]= useReviews();
    console.log(reviews);
    return (
        <div>
            <h1>Reviews Of Our Honorable Customers</h1>
            <div className='row mt-5'>
            {
                reviews.map(review=><Review review={review} key={review.id}/>)
            }
            </div>
        </div>
    );
};

export default Reviews;