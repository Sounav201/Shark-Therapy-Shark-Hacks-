import React from 'react';
import Post from "./Post";
import "./Feed.css"
import CreatePosts from "./CreatePosts";
function Feed() {
    return (
        <div className="feed">

            <CreatePosts/>

            <Post
             message='Working'
             timestamp='TIMESTAMP'
             userID='Shark#1234'
             image='https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

            />
            <Post
            message='Holaaa'
            timestamp='D-Day'
            userID='Shark#1456'
             />
                
            
            
        </div>
    )
}

export default Feed
