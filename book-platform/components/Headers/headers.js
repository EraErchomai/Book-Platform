import React, { Component } from 'react';
//import './Favorites.css';


class Headers extends Component {
    render() { 
        return (
            <div className="header">
                <div><img /></div>
                <div>Прочитала</div>
                <div>Хочу прочитать</div>
                <div>Читаю сейчас</div>
                <div><button>Войти</button></div>
            </div>
        );
    }
}

export default Headers;
