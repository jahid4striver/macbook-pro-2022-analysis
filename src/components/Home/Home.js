import React from 'react';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <div className='row'>
            <div className='col-4 m-5'>
                <h1 className='text-warning'>Get The Best Of the World</h1>
                <h1>New <span className='text-danger'>MacBook Pro</span> 2022</h1>
                <p className='text-start'>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast.</p>
                <button className='btn btn-warning btn-lg text-white fw-bold'>Live Demo</button>
            </div>
            <div className='col-6 m-5'>
                <img className='w-75' src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large_2x.jpg" alt="" />
            </div>
        </div>
        <Reviews></Reviews>
        </div>
    );
};

export default Home;