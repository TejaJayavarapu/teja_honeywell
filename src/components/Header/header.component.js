import React from 'react';
import './header.component.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="app-header">
            <div className="app-title">
                API Selling
            </div> 
        </div>);
    }
}


export default Header;