import React, { Component } from 'react';
import './genres.css';

import { connect } from "react-redux";
import { genresSearch } from "../../redux/actions/action";

class GenresPage extends Component {
    render() { 
        return (
            <div className='all-genres'>
                <div className='block-menu'>
                    <h2>ЖАНРЫ</h2>
                    <div className='genres-title' onClick={() => this.props.genresSearch('Любовные романы')}>Любовные романы</div>
                    <div className='genres-title' onClick={() => this.props.genresSearch('Классика')}>Классика</div>
                    <div className='genres-title' onClick={() => this.props.genresSearch('Фэнтези')}>Фэнтези</div>
                    <div className='genres-title' onClick={() => this.props.genresSearch('Романтическое фэнтези')}>Романтическое фэнтези</div>
                    <div className='genres-title' onClick={() => this.props.genresSearch('Триллеры')}>Триллеры</div>
                    <div className='genres-title' onClick={() => this.props.genresSearch('Детективы')}>Детективы</div>
                </div>
                <div className='genres-books'>
                    {this.props.genres.map((book, i) => (
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

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        genres: state.genres 
    }
};

const mapDispatchToProps = dispatch => ({
    genresSearch: (str) => {
        dispatch(genresSearch(str))
    }
  });


export default connect(mapStateToProps, mapDispatchToProps)(GenresPage);