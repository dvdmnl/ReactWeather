import React from 'react';
import Nav from './Nav.jsx'

var Main = (props) => {
    return(
        <div>
            <Nav/>
            <div className="row">
                <div className="columns small-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Main