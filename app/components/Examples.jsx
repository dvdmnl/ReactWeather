import React from 'react';
import {Link} from 'react-router';


var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here Are Some Examples to try out :</p>
            <ol>
                <li>
                    <Link to='/?location=jerusalem'>Jerusalem, Israel</Link>
                </li>
                <li>
                    <Link to='/?location=tel-aviv'>Tel-Aviv, Israel</Link>
                </li>
            </ol>
        </div>
    )
}

export default Examples;