import React, { useState, useEffect }from "react";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';

import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import useStyles from './styles';

import Pagination from '../Pagination';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    // once we clear the form, it changes the currentId
    // the app will dispatch the getPosts action
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const handleKeyPress = (e) => {
      // enter key is 13
      if(e.keyCode === 13) {
        // search post 
      }
    };

    // when there is an array as a state, must first spread the array and add new 
    const handleAdd = (tag) => setTags([...tags, tag]);

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          className={classes.gridContainer}
          container
          justifyContent="space-between"
          align-items="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={9} sm={6}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar className={classes.appBar} position="static" color="inherit" >
                <TextField 
                name="search" 
                variant="outlined" 
                label="Search"
                onKeyPress={handleKeyPress}
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                 />
                <ChipInput
                 style={{ margin: '10px 0' }}
                 value={tags}
                 onAdd={handleAdd}
                 onDelete={handleDelete}
                 label="Search Tags"
                 variant="outlined"
                 />
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6} >
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
