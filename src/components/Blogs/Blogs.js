import React from 'react';

const Blogs = () => {
    return (
        <div className='container row mt-5'>
            <div className='col-6 shadow'>
            <h1>What is React Context API ?</h1>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.Using Context API we can define several unrelated contexts (stores) and use each in its proper place in the app. </p>
            </div>
            <div className='col-6 shadow'>
            <h1>What is Semantic Tag?</h1>
            <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header , footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.</p>
            </div>
        </div>
    );
};

export default Blogs;