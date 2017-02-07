import React, {Component} from 'react'
import { Link } from 'react-router';


class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    };

    onSearch = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li><Link to="/">Get Weather</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/examples">Examples</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search Weather by City"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

export default Nav
