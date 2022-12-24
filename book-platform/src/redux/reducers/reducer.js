const initialState = {
    favorites: [],
    books: [
        // {
        //     title: '',
        //     author: '',
        //     genre: '',
        //     state: 'false',
        //     add: false
        // },
        // {
        //     title: '',
        //     author: '',
        //     genre: '',
        //     state: 'false',
        //     add: false
        // },
        // {
        //     title: '',
        //     author: '',
        //     genre: '',
        //     state: 'false',
        //     add: false
        // }
    ]
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
    return state;
  }
  
  export default reducer;
