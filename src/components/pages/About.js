import React from 'react';
import { Link } from "react-router-dom";

import "../../App.css";

export default function About() {
    const linkStyle = {
        color: 'lightblue',
        textDecoration: 'none',
        marginLeft: '25px',
    }

    return (
        //when you don' need an element in your DOM
        //smth like <ng-container> tag in Angular?
        <React.Fragment>
            <h1 className="header">Small Rough-and-Ready App to Try My Hand At React</h1>
            <Link style={linkStyle} to="/">Back Home</Link>
        </React.Fragment>
    )
}
