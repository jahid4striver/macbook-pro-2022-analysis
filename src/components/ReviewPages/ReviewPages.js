import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewPage from '../ReviewPage/ReviewPage';

const ReviewPages = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='mt-5'>
            <h1>What is Our Customer Says</h1>
            <div className='container row mt-5'>
            {
                reviews.map(review => <ReviewPage key={review.key} review={review}/>)
            }
            </div>
            
        </div>
    );
};

export default ReviewPages;