import React, { Component } from 'react';
import './Navbar.css';
import './Img.css';
import RigthButtons from './RigthButtons';


class Navbar extends Component {
    render() {
        return (
            <div className="navbar">

                <navbar>
                    <url>
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-1-logo-png-transparent.png" className="image" alt="" />
                        <input className="Search" placeholder="Buscar"></input>
                        <a className="Home">Inicio</a>
                        <a className="Follow">Siguiendo</a>
                        <a className="Name">Mariana</a>
                        <i className="fas fa-comment-dots"></i>
                        <i className="fas fa-bell"></i>
                        <i className="fas fa-ellipsis-h"></i>
                    </url>
                </navbar>
            </div>
        )

    }
}

export default Navbar;