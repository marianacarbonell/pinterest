import React, { Component } from 'react';
import './All.css';


class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="Logo">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-1-logo-png-transparent.png" alt=""/>
                </div>
                <div className="Search">
                    <input type="text" placeholder="Buscar" />
                </div>
            </div>
                )
        
            }
        }
        
export default Navbar;