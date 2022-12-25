import React, { Component } from 'react';
import './mainMenu.css';

import { connect } from "react-redux";
import { fetchBooks } from "../../redux/actions/action";
import { addToRead } from "../../redux/actions/action";
import { addToFavorites } from "../../redux/actions/action";
//import Santa from "../Santa/santa";

class MainMenu extends Component {
    onClick = (event) => {
        if(event.currentTarget.classList.contains('right')) {
        const block = document.querySelector('.slider')
        block.scrollBy(188, 0)
        }
        if(event.currentTarget.classList.contains('left')) {
        const block = document.querySelector('.slider')
        block.scrollBy(-188, 0)
        }
      }
    componentDidMount() {
        this.props.fetchBooks()
    }
    render() { 
        return (
            <div className="all">
                    <h3>Книги на русском</h3>
                    <div className='books-block'>
                    <img src={require('../../images/arrow-left.png')} className='arrow left' onClick={this.onClick} alt=''></img>
                    <div className='slider'>
                    {this.props.books.map((book, i) => (
                     <div className='book-item' key={book.id}>
                            <div className='book-cover'>
                            <img className='cover' src={book.img} alt=' '></img>
                        </div>
                        <div className='book-info'>
                            <p className='title'>{book.title}</p>
                            <p className='author'>{book.author}</p>
                            <p className='genre'>{book.genre.join('')}</p>
                            <div className='button'><button onClick={() => this.props.addToRead(book.id)} className={book.state ? 'read' : 'not-read'}>{book.state ? 'Прочитала' : '+ Добавить'}</button>{book.add ? <img className='star' onClick={() => this.props.addToFavorites(book.id)} src={require('../../images/star-add.png')} alt=''></img> : <img className='star' onClick={() => this.props.addToFavorites(book.id)} src={require('../../images/star-not-add.png')} alt=''></img>}</div>
                        </div>
                    </div>
                ))}
                </div>
                <img src={require('../../images/arrow-right.png')} className='arrow right' onClick={this.onClick} alt=''></img>
                
                </div>
                <h3>Книги на английском</h3>
                <div className='books-block'>
                
                
                    </div>   
                    <h3>Книги на турецком</h3>  
                <div className='books-block'>
                   
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

const mapDispatchToProps = dispatch => ({
    fetchBooks: (id) => {
        fetch("http://localhost:3000/books")
        .then(res => res.json())
        .then(data => { 
            dispatch(fetchBooks(data))
        });
      
    },
    addToRead: (id) => {
        dispatch(addToRead(id))
    },
    addToFavorites: (id) => {
        dispatch(addToFavorites(id))
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);