import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link>{' | '} 
            <Link style={linkStyle}to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#0bb5ee',
    color: 'white',
    textAlign: "center",
    padding: '15px',

};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
}

export default Header;