import React from 'react';
import useReviews from '../../hooks/useReviews';

const Reviews = () => {
    const [reviews, setReviews]= useReviews();
    console.log(reviews);
    return (
        <div>
            <h1>Reviews Of Our Honorable Customers</h1>
            {
                reviews.map(review=>)
            }
        </div>
    );
};

export default Reviews;