// in reducers, state always needs to be equal to something, in this case state=posts
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            // send an array of posts, first spread the posts and add a new post stored in the action payload
            return [...posts, action.payload];
        default:
            return posts;
    }
}