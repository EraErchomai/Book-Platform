import React, { Component } from 'react';
import './header.css';


class Headers extends Component {
    render() { 
        return (
            <div className="header">
                <div><img src='./logo.png' alt=' ' className='logo'/></div>
                <div>Прочитала</div>
                <div>Избранные</div>
                <div>Жанры</div>
                <div><button>Войти</button></div>
            </div>
        );
    }
}

export default Headers;