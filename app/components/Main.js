import React from 'react';
import Nav from './Nav.jsx'

var Main = (props) => {
    return(
        <div>
            <Nav/>
            {props.children}
        </div>
    )
}

export default Main