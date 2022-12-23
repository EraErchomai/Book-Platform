import React, { Component } from 'react';
import './mainPage.css';


class MainPage extends Component {
    state = {
        data: []
    }
    getData = () => {
        fetch("http://localhost:3000/books")
        .then(res => res.json())
        .then(data => { 
            console.log(data)
          this.setState({ data: data }) 
        });
      };
    
    componentDidMount() {
        this.getData();
    }
    render() { 
        return (
            <div className="all">
                
                    <h3>Книги на русском</h3>
                    <div className='books-block'>
                    <img src={require('../../images/arrow.svg')} alt=''></img>
                    {this.state.data.map((book, i) => (
                     <div className='book-item' key={book.id}>
                            <div className='book-cover'>
                            <img className='cover' src={book.img} alt=' '></img>
                        </div>
                        <div className='book-info'>
                            <p className='title'>{book.title}</p>
                            <p className='author'>{book.author}<img src={require('../../images/star.svg')} alt=''></img></p>
                            <p className='genre'>Фэнтези</p>
                            <button className='state'>Добавить</button>
                        </div>
                    </div>
                ))}
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

export default MainPage;