import React, { Component } from 'react';
import './favoritesPage.css';
import 'animate.css';

import { connect } from "react-redux";
import BookItem from "../BookItem/bookItem";

class FavoritesPage extends Component {
    render() { 
        let read = this.props.books.filter((book) => {
            return book.add === true
        })
        return (
            <div className='favorite-books'>
                <div className='aside1'><img className='side1 animate__animated animate__heartBeat animate__slower' src={require('../../images/caraval.jpg')} alt=' '></img>
                <img className='side2 animate__animated animate__flipInX ' src={require('../../images/mirror.jpg')} alt=' '></img>
                </div>
                <div className='div'>
                    <ul className='read-books'>
                    {read.map((book, i) => (
                     <li key={book.id}><BookItem {...book}/></li>
                ))}
                </ul>
                </div>

                <div className='aside2'>
                <img className='side3 animate__animated animate__rollIn' src={require('../../images/cassardim.jpg')} alt=' '></img>
                <img className='side4 animate__animated animate__wobble animate__slower' src={require('../../images/caraval-sisters.jpg')} alt=' '></img>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books 
    }
};


export default connect(mapStateToProps, null)(FavoritesPage);