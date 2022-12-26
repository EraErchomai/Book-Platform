import React, { Component } from 'react';
import './genres.css';

import { connect } from "react-redux";
import { genresSearch } from "../../redux/actions/action";
import { scaleRotate as Menu } from 'react-burger-menu'
import BookItem from "../BookItem/bookItem";

import Santa from "../Santa/santa";
//import { Route, Link, Routes } from 'react-router-dom';

class GenresPage extends Component {
    state = {
        genresActive: false
    }
    santa = () => {
        document.querySelector('.santa-genres').style.display = 'flex'
        document.querySelector('.genres-books').style.display = 'none'
    }
    render() { 
        return (
            <div className='all-genres'>
                    <Menu width={ '40%' }>
                    <a className='h2' onClick={() => this.santa()}>ЖАНРЫ</a>
                    <a className='genres-title' onClick={() => this.props.genresSearch('Любовные романы')}>Любовные романы</a>
                    <a className='genres-title' onClick={() => this.props.genresSearch('Классика')}>Классика</a>
                    <a className='genres-title' onClick={() => this.props.genresSearch('Фэнтези')}>Фэнтези</a>
                    <a className='genres-title' onClick={() => this.props.genresSearch('Романтическое фэнтези')}>Романтическое фэнтези</a>
                    <a className='genres-title' onClick={() => this.props.genresSearch('Триллеры')}>Триллеры</a>
                    <a className='genres-title' onClick={() => this.props.genresSearch('Детективы')}>Детективы</a>
                    </Menu>
                    <div className='santa-genres'><Santa /></div>
                    {this.props.genres.length ? <ul className='genres-books'>
                    {this.props.genres.map((book, i) => (
                     <li key={book.id}><BookItem {...book}/></li>
                ))}
                </ul> : null}
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
        document.querySelector('.santa-genres').style.display = 'none'
        //document.querySelector('.bm-menu-wrap').ariaHidden = 'false'
        dispatch(genresSearch(str))
    }
  });


export default connect(mapStateToProps, mapDispatchToProps)(GenresPage);