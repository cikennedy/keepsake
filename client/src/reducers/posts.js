import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_SEARCH, START_LOADING, END_LOADING } from '../constants/actionTypes';

// in reducers, state always needs to be equal to something, in this case state=posts
export default (state = { isLoading: true, post: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case DELETE:
            return { ...state, posts: state.filter((post) => post._id !== action.payload)};
        case UPDATE:
            return { ...state, posts: state.map((post) => post._id === action.payload._id ? action.payload : post)};
        case LIKE:    
            return { ...state, posts: state.map((post) => post._id === action.payload._id ? action.payload : post)};
        case FETCH_ALL:
            return {
                // always spread the state when working with objects
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload };
        case CREATE:
            // send an array of posts, first spread the state and add a new post stored in the action payload
            return { ...state, posts: [...state, action.payload]};
        default:
            return state;
    }
}