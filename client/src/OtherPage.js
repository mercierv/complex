import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            In some other page! 
            <Link to="/">Go back home my man</Link>
        </div>
    );
};