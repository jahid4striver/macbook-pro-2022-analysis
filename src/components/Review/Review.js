import React from 'react';

const Review = ({review}) => {
    const {name, img, comment, rating}= review;
    return (
        <div className='col-4 mx-auto my-3'>
            <div className='shadow p-3'>
            <img className='rounded-circle' src={img} alt="" width="150px"/>
            <h4>{name}</h4>
            <p>{comment}</p>
            <p>Rating <small>{rating}</small></p>
            </div>
        </div>
    );
};

export default Review;