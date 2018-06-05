import React from 'react';
import loaderSrc from '../../assests/loading.gif';

const Loader = props => (
    <div>
        <img
            style={{width: 75 }}
            alt="loading icon"
            src={loaderSrc}
        />
    </div>
);

export default Loader;