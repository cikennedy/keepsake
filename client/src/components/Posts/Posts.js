import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

import useStyles from './styles';

const Posts = () => {
    // in the callback function, get access to state in global index store 
    // posts are named in the reducer 
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);

    return (
        <>
        <h1>POSTS</h1>
        <Post />
        <Post />
        </>
    );
}

export default Posts;