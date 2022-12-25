import React, { Component } from 'react';
import './favoritesPage.css';

import { connect } from "react-redux";

class FavoritesPage extends Component {
    render() { 
        let read = this.props.books.filter((book) => {
            return book.add === true
        })
        return (
            <div>
                {read.map((book, i) => (
                     <div className='book-item' key={book.id}>
                            <div className='book-cover'>
                            <img className='cover' src={book.img} alt=' '></img>
                        </div>
                        <div className='book-info'>
                            <p className='title'>{book.title}</p>
                            <p className='author'>{book.author} {book.add ? <img className='star' onClick={() => this.props.addToFavorites(book.id)} src={require('../../images/star-add.png')} alt=''></img> : <img className='star' onClick={() => this.props.addToFavorites(book.id)} src={require('../../images/star-not-add.png')} alt=''></img>}</p>
                            <p className='genre'>Фэнтези</p>
                            <button onClick={() => this.props.addToRead(book.id)} className={book.state ? 'read' : 'not-read'}>{book.state ? 'Прочитала' : '+ Добавить'}</button>
                        </div>
                    </div>
                ))}
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