import React from 'react';
import Post from './Post/Post'
import useStyles from './styles';
import { useSelector } from 'react-redux';

import {Grid, CircularProgress} from '@material-ui/core';

const Posts = ({setCurrentId}) => {
    const classes = useStyles();
    const {posts, isLoading} = useSelector((state) => state.posts);

    if(!posts.length && !isLoading) return 'No Posts';

    return( 
        //posts is an array
        isLoading ? <CircularProgress /> : (
        <Grid className= {classes.container} container alignItems='stretch' spacing={3}>
            {posts.map((post) =>(
                <Grid key={post._id} xs={12} sm={12} md={6} lg={4} item>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Grid>
        )
    ); 
}

export default Posts;