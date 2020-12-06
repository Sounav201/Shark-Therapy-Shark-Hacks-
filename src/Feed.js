import React from 'react';
import Post from "./Post";
import "./Feed.css"
import CreatePosts from "./CreatePosts";
function Feed() {
    return (
        <div className="feed">

            <CreatePosts/>

            <Post
             message='This community has helped me so much !'
             timestamp='3rd December, 2020 7:00 AM'
             userID='Shark#1234'
             image='https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

            />
            <Post
            message="Finally got over the fear of heights! Feeling stoked 😃 "
            timestamp='14th November, 2020 5:30PM'
            userID='Shark#1456'
            image="https://images.unsplash.com/photo-1473134090548-69219f9cbb80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbSUyMGFib3ZlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                
            
            
        </div>
    )
}

export default Feed
