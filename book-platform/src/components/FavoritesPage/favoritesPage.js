import React, { Component } from 'react';
import './favoritesPage.css';

import { connect } from "react-redux";
import BookItem from "../BookItem/bookItem";

class FavoritesPage extends Component {
    // componentDidMount() {
    //     this.timer = setInterval(() => {
    //         const selector = document.querySelector('.side1')
    //         selector.classList.add('magictime', 'puffIn')
    //     }, 1000);
    //   }
    
    //   componentWillUnmount() {
    //     clearInterval(this.timer);
    //   }
    // myFunction = () => {
        
    // }
    // setInterval(myFunction, 3000);
    render() { 
        let read = this.props.books.filter((book) => {
            return book.add === true
        })
        return (
            <div className='favorite-books'>
                <div className='aside1'><img className='side1' src={require('../../images/caraval.jpg')} alt=' '></img>
                <img className='side2' src={require('../../images/mirror.jpg')} alt=' '></img>
                </div>
                <ul className='read-books'>
                    {read.map((book, i) => (
                     <li key={book.id}><BookItem {...book}/></li>
                ))}
                </ul>
                <div className='aside2'>
                <img className='side3' src={require('../../images/cassardim.jpg')} alt=' '></img>
                <img className='side4' src={require('../../images/caraval-sisters.jpg')} alt=' '></img>
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