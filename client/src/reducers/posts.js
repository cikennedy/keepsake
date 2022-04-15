import { FETCH_ALL, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, COMMENT, FETCH_BY_SEARCH, FETCH_BY_CREATOR, START_LOADING, END_LOADING } from '../constants/actionTypes';

// in reducers, state always needs to be equal to something, in this case state=posts
export default (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case DELETE:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload)};
        case UPDATE:
            return { ...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)};
        case LIKE:    
            return { ...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)};
        case COMMENT:
            return { 
                ...state, 
                posts: state.posts.map((post) => {
                  if (post._id === action.payload._id) {
                    return action.payload;
                  }
                  return post;
                }),
            };
        case FETCH_ALL:
            return {
                // always spread the state when working with objects
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_POST:
            return { ...state, post: action.payload };
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload.data };
        case FETCH_BY_CREATOR:
            return { ...state, posts: action.payload.data };
        case CREATE:
            // send an array of posts, first spread the state and add a new post stored in the action payload
            return { ...state, posts: [...state.posts, action.payload] };
        default:
            return state;
    }
}