import React, { Component } from 'react';
import './header.css';


class Headers extends Component {
    render() { 
        return (
            <div className="headers">
                <div className='main-logo'><div><img src='./logo.png' alt=' ' className='logo'/></div></div>
                <div className='menu'>
                <div className='header'>Прочитала</div>
                <div className='header'>Избранные</div>
                <div className='header'>Жанры</div>
                {/* <div><button>Войти</button></div> */}
                </div>
            </div>
        );
    }
}

export default Headers;