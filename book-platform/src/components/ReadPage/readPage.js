import React, { Component } from 'react';
import './readPage.css';

import { connect } from "react-redux";
// import { fetchBooks } from "../../redux/actions/action";
// import { addToRead } from "../../redux/actions/action";
// import { addToFavorites } from "../../redux/actions/action";

class ReadPage extends Component {
    render() { 
        return (
            <div>
                {this.props.books.map((book, i) => (
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


export default connect(mapStateToProps, null)(ReadPage);