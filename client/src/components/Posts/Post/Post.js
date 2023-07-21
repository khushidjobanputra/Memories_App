import React, { useState } from 'react';
// import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpOffAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
// import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import moment from 'moment';
// import useStyles from './styles';
import { useDispatch } from 'react-redux';
import './styles.css'
import { deletePost, likePost } from '../../../action/posts';
import { useNavigate } from 'react-router-dom';
{/* <link src="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link> */}

const Post = ({ post, setCurrentId }) => {
    // const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] = useState(post?.likes);

    // console.log(post?.creator);
    
    const userId = user?.result?._id;
    
    const hasLikedPost = likes.find((like) => like === user?.result?._id);

    const handleLike = async () => {
        dispatch(likePost(post._id));

        if(hasLikedPost) {
            setLikes(likes.filter((id) => id !== userId))
        } else {
            setLikes([ ...likes, userId])
        }
    };

    const Likes = () => {
        if(likes.length > 0) {
            return likes.find((like) => like === user?.result?._id) 
            ? (
                //&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }
                <><ThumbUpAltIcon fontSize="medium" />&nbsp;{likes.length > 2 ? `${likes.length - 1}` : `${likes.length}` }</>
            ) : (
                //{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
                <><ThumbUpOffAltOutlined fontSize="small" />&nbsp;{likes.length}</>
            );
        }

        return <><ThumbUpOffAltOutlined fontSize="small" /></>;
    };

    const openPost = () => navigate(`/posts/${post._id}`)

    return (
        
        <div>
            <div className="card">
                <img src={post.selectedFile} className='card-img' alt="" />
                <div className="card-body">
                    <h3 className='card-title'>{post.title}</h3>
                    <p className='card-sub-title'>{post.name}</p>
                    <p className='card-info'>{post.message.slice(0,100)}</p><p onClick={openPost}>...read more</p>
                    <p className='card-info2'>{post.tags.map((tag) => `#${tag} `)}</p>
                    <div className='overlay2'>
                        {
                            (user?.result?._id === post?.creator) && (
                                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                                <MoreHorizIcon fontSize="medium" />
                                </Button> 
                            )
                        }
                    </div>  
                <div className='btn'>
                 <button size='medium' color='white' className='like-btn' disabled={!user?.result} onClick={handleLike}>
                     <Likes />
                 </button>
                 <button className='view-btn' variant='contained' onClick={openPost}>
                     View
                 </button>
                 </div>
                 {(user?.result?._id === post?.creator) && (
                     <button className='delete-btn' color='red'  onClick={() =>{
                        dispatch(deletePost(post._id))
                        window.location.reload()  
                     }}>
                         {/* <DeleteIcon fontSize="medium"/> */}
                         Delete
                     </button>
                 )}
                </div>
            </div>
        </div>
        
        // <div class="container">

        // <div class="row">

        //     <div class="column">
                
        //         <div class="effect">
        //             <div class="effect-img">
        //                 <img src="img/1.jpg" alt="" />
        //             </div>
        //             <div class="effect-text">
        //                 <div class="inner">
        //                     <h2>This is heading</h2>
        //                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat velit qui quos repellat nulla soluta exceptu</p>
        //                     <div class="effect-btn">
        //                         <a href="#" class="btn"><i class="fa fa-eye"></i> Read More</a>
        //                     </div>
        //                     </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </div>

        // <div>
        // <div class="card">
        //     <div class="imgbox">
        //         <img
        //         src={post.selectedFile}
        //         />
        //     </div>

        //     <div class="content">
        //         <h2>{post.name}</h2>
        //         <h3>{post.title}</h3>
        //         <h4>{post.tags.map((tag) => `#${tag} `)}</h4>
        //         <p>{post.message}</p>
        //         <Button style={{color: 'black'}} size="small" onClick={() => setCurrentId(post._id)}>
        //             <MoreHorizIcon fontSize="medium" />
        //         </Button>
        //         <Button size='small' color='primary' disabled={!user?.result} onClick={handleLike}>
        //             <Likes />
        //         </Button>
        //         <Button color='primary' variant='contained' onClick={openPost}>
        //             View
        //         </Button>
        //         {(user?.result?._id === post?.creator) && (
        //             <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
        //                 <DeleteIcon fontSize="small" />
        //                 Delete
        //             </Button>
        //         )}
        //     </div>
        // </div>
        // </div>
        /*
        <Card className={classes.card} raised elevation={6}>
                <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
                <div className={classes.overlay}>
                    <Typography variant='h6'>{post.name}</Typography>
                    <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                        <MoreHorizIcon fontSize="medium" />
                    </Button>
                </div>
                <div className={classes.details}>
                    <Typography variant='body2' color='primary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>{post.message}</Typography>
                </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' disabled={!user?.result} onClick={handleLike}>
                    <Likes />
                </Button>
                <Button color='primary' variant='contained' onClick={openPost}>
                    View
                </Button>
                {<Button color='primary' variant='contained' onClick={openPost}>
                    Add to cart
                </Button> }
                {(user?.result?._id === post?.creator) && (
                    <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                )}
            </CardActions>
        </Card>
        */
    );
}

export default Post;