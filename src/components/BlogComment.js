import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import TextField from '@mui/material/TextField'
import image1 from './images/man.jpg';
import image2 from './images/pic.jpg';
import image3 from './images/roger.jpg';
import Button from '@mui/material/Button';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
})

const dammyData = [
    {
        id: 1,
        fullName: "Wandera Rogers",
        PhoneNumber: "07457635265",
        image: image1,
        likes: 0,
        comments: ["Nice"]
    },
    {
        id: 2,
        fullName: "Lwagasole Ryan",
        PhoneNumber: "07457637839",
        image: image2,
        likes: 0,
        comments: ["Nice"]
    },
    {
        id: 3,
        fullName: "Wandera Ronald",
        PhoneNumber: "07457629837",
        image: image3,
        likes: 0,
        comments: ["Nice"]
    }
]

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState(dammyData);

    const [inputComment, setInputComment] = useState("");

    const addLikes = (id) =>{
        let copy = [...blogPosts];
        copy.map((blog,index) => {
            if(index === id) {
               blog.likes = blog.likes + 1
            }
            return blog
        })
        setBlogPosts([...copy])
    }

    const addComment = (id) => {
        let copy = [...blogPosts];
        copy.map((blog, index) => {
            if(index === id) {
                blog.comments.push(inputComment);
                setInputComment("")
                console.log(blog.comments)
            }
            return blog
        })
        setBlogPosts([...copy])
    }

    const removeLikes = (id) => {
        let copy = [...blogPosts];
        copy.map((blog,index) => {
            if(index === id) {
                blog.likes = blog.likes - 1;
            }
            return blog
        })
        setBlogPosts([...copy])
    }
    return (
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {
                blogPosts.map((blog, index) => (
                    <Paper
                    sx={{
                        p:2,
                        margin: "2rem auto 2rem auto",
                        maxWidth: 400,
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff'
                    }} 
                    key={blog.id}
                >
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase sx={{width: 128, height: 128}}>
                                <Img alt={blog.fullName} src={blog.image} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {blog.fullName}
                                    </Typography>
                                    <Typography variant='body2' color="text.secondary">
                                        Likes: {blog.likes}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button onClick={() => addLikes(index)}>Like</Button>
                                    <Button onClick={() => removeLikes(index)}>UnLike</Button>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle" component="div">
                                    {blog.PhoneNumber}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div>
                        {blog.comments.map((comment,index) => (
                            <ul key={index}>
                                <Typography variant='body2' color="text.secondary">
                                        {comment}
                                </Typography>
                            </ul>
                        ))}
                        <TextField 
                            type='text' value={inputComment} 
                            onChange={(e) => setInputComment(e.target.value)}
                            label="Add Comment"
                            fullWidth
                        /> <br />
                        <Button onClick={() => addComment(index)}>Add Comment</Button>
                    </div>
                </Paper>
                ))
            }
        </div>
    )
}

export default Blog;
