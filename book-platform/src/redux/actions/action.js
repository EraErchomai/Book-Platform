export function fetchBooks(data) {
    return {
      type: 'FETCH_BOOKS',
      payload: {
        data: data
      }
    }
  }

  export function addToRead(id) {
    return {
      type: 'ADD_TO_READ',
      payload: {
        id: id
      }
    }
  }

  export function addToFavorites(id) {
    return {
      type: 'ADD_TO_FAVORITES',
      payload: {
        id: id
      }
    }
  }

  export function genresSearch(str) {
    return {
      type: 'GENRES_SEARCH',
      payload: {
        str: str
      }
    }
  }