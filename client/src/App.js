// import {hot} from 'react-hot-loader/root'
import React from "react";
import {Container} from '@material-ui/core';
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import {Navigate} from 'react-router-dom';
import PostDetails from "./components/PostDetails/PostDetails";

const App = () =>{

    // const Navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('profile'));

    return(
        <Container maxWidth="xl">
            <Navbar />
            <Routes>
                <Route path="/"  element={<Navigate to="/posts" />}/>
                {/* <Route path="/"  element={<Home />}/> */}
                <Route path="/posts"  element={<Home />}/>
                <Route path="/posts/search"  element={<Home />}/>
                <Route path="/posts/:id" element={<PostDetails />}/>
                <Route path='/auth'  element={(!user ? <Auth /> : <Navigate to="/posts" />)} />
            </Routes>
        </Container>
    );
} 

// export default hot(App);
export default App;