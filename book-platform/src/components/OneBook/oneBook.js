import React, { Component } from 'react';
import './oneBook.css';

class BookItem extends Component {
    render() { 
        const { id, img, title, author, genre, state, add } = this.props;
        return (
            <div className='book-item'>
                        <div className='book-cover'>
                        <img className='cover' src={img} alt=' '></img>
                </div>
                <div className='book-info'>
                    <p className='title'>{title}</p>
                    <p className='author'>{author}</p>
                    <p className='genre'>{genre.join('')}</p>
                    <div className='button'><button onClick={() => this.props.addToRead(id)} className={state ? 'read' : 'not-read'}>{state ? 'Прочитала' : '+ Добавить'}</button>{add ? <img className='star' onClick={() => this.props.addToFavorites(id)} src={require('../../images/star-add.png')} alt=''></img> : <img className='star' onClick={() => this.props.addToFavorites(id)} src={require('../../images/star-not-add.png')} alt=''></img>}</div>
                </div>
            </div>
        );
    }
}


export default BookItem;