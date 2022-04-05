import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='shadow-lg p-4'>
            <Link className='text-decoration-none me-4 p-2 text-black fw-bold' to="/">Home</Link>
            <Link className='text-decoration-none me-4 p-2 text-black fw-bold' to="/reviews">Reviews</Link>
            <Link className='text-decoration-none me-4 p-2 text-black fw-bold' to="/dashboard">Dashboard</Link>
            <Link className='text-decoration-none me-4 p-2 text-black fw-bold' to="/blogs">Blogs</Link>
            <Link className='text-decoration-none me-4 p-2 text-black fw-bold' to="/about">About</Link>
        </nav>
    );
};

export default Header;