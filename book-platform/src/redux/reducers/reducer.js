const initialState = {
    favorites: [],
    books: [],
    genres: []
  };



function reducer(state = initialState, action) {
    if (action.type === "FETCH_BOOKS") {
        const books = action.payload.data;
        return {
            ...state,
            books
          };
    }
    if (action.type === "ADD_TO_READ") {
        let books = [...state.books];
    books = books.map((item) => {
        if (item.id === action.payload.id) {
            let state = !(item.state);
            return {
                ...item,
                state
            }
        }
        return{
            ...item
        }
    })

    return{
        ...state,
        books
    }
    }
    if (action.type === "ADD_TO_FAVORITES") {
        let books = [...state.books];
    books = books.map((item) => {
        if (item.id === action.payload.id) {
            let add = !(item.add);
            return {
                ...item,
                add
            }
        }
        return{
            ...item
        }
    })

    return{
        ...state,
        books
    }
    }
    if (action.type === "GENRES_SEARCH") {
        let genres = [...state.books]
        genres = genres.filter((item) => {
            return item.genre.indexOf(`${action.payload.str}`) !== -1
        })
        return {
            ...state,
            genres
          };
    }
        
    return state;
  }
  
  export default reducer;
