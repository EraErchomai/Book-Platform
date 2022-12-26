import React, { Component } from 'react';
import './mainMenu.css';

import { connect } from "react-redux";
import { fetchBooks } from "../../redux/actions/action";
//import { addToRead } from "../../redux/actions/action";
import BookItem from "../BookItem/bookItem";
//import { addToFavorites } from "../../redux/actions/action";


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
                        <ul>
                    {this.props.books.map((book, i) => (
                     <li key={book.id}><BookItem {...book}/></li>
                ))}
                </ul>
            </div>
                <img src={require('../../images/arrow-right.png')} className='arrow right' onClick={this.onClick} alt=''></img>
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
    fetchBooks: () => {
        fetch("http://localhost:3000/books")
        .then(res => res.json())
        .then(data => { 
            dispatch(fetchBooks(data))
        });
      
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);