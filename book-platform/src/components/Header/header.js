import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Headers extends Component {
    render() { 
        return (
            <div className="headers">
                <div className='main-logo'><div><img src={require('../../logo.png')} alt=' ' className='logo'/></div></div>
                <div className='menu'>
                <div className='header'>
                <Link className="link" to="/read">
                Прочитала
                </Link></div>
                <div className='header'>
                <Link className="link" to="/favorites">
                Избранные
                </Link></div>
                <div className='header'>
                <Link className="link" to="/genres">
                Жанры
                </Link></div></div>
            </div>
        );
    }
}

export default Headers;