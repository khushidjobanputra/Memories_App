import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, Card, CardMedia, CardContent } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import CommentSection from './CommentSection';
import { getPost, getPostsBySearch } from '../../action/posts';
import useStyles from './styles';

const PostDetails = () => {
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    useEffect(() => {
        if(post) {
            dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
        }
    }, [post]);

    if(!post) return null;

    if(isLoading) {
        return <Paper elavation={6} className={classes.loadingPaper}>
            <CircularProgress size='7em' />
        </Paper>
    }

    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

    const openPost = (_id) => navigate(`/posts/${_id}`);

    return (
        <Paper style={{ padding: '20px', borderRadius: '15px', margin: 'auto' }} elavation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography variant="h3" component="h2" >{post.title}</Typography>
                    <Typography gutterBottom variant="body1" color="primary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                    <Typography variant="h6" color='textSecondary'>Created by: {post.name}</Typography>
                    <Typography variant="body1" color='textSecondary'>{moment(post.createdAt).fromNow()}</Typography>
                    <Typography gutterBottom variant="h6" component="p">{post.message}</Typography>
                    {/* <Divider style={{ margin: '20px 0' }} />
                    <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography> */}
                    <Divider style={{ margin: '20px 0' }} />
                    <CommentSection post={post} />
                    {/* <Divider style={{ margin: '20px 0' }} /> */}
                </div>
                <div className={classes.imageSection}>
                    <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} width="500px" height="600px" />
                </div>
            </div>
            { !! recommendedPosts.length && (
                <div className={classes.section}>
                    <Typography gutterBottom variant='h5'>You might also like:</Typography>
                    <Divider />
                    <div className={classes.recommendedPosts}>
                        {recommendedPosts.map(({title, message, name, tags, createdAt, selectedFile, _id }) =>(
                            <Card style={{ margin: '20px', cursor: "pointer" }} className={classes.card2} raised elevation={6} onClick={() => openPost(_id)}>
                <CardMedia className={classes.media2} image={selectedFile} title={post.title} />
                <div className={classes.overlay2}>
                    <Typography variant='h6'>{name}</Typography>
                    <Typography variant='body2'>{moment(createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.details2}>
                    <Typography variant='body2' color='primary'>{tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography className={classes.title2} variant='h5' gutterBottom>{title}</Typography>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>{message.slice(0,100)}...</Typography>
                </CardContent>
        </Card> 
                        ))}
                    </div>
                    {/* <div className={classes.recommendedPosts}>
                        {recommendedPosts.map(({ title, message, name, likes, selectedFile, _id }) => (
                            <Card style={{ margin: '20px', cursor: "pointer" }} onClick={() => openPost(_id)} key={_id}> 
                                <Typography gutterBottom variant='h6'>{title}</Typography>
                                <Typography gutterBottom variant='subtitle2'>{name}</Typography>
                                <Typography gutterBottom variant='subtitle2'>{message}</Typography>
                                <Typography gutterBottom variant='subtitle1'>Likes: {likes.length}</Typography>
                                <img src={selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} width='300px' height="300px" />
                            </Card>
                        ))}
                    </div> */}
                </div>
            )}
        </Paper>
    )
}

export default PostDetails;