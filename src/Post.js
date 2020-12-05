import React, { useState, useEffect } from 'react'
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import ChatBubbleSharpIcon from '@material-ui/icons/ChatBubbleSharp';
import "./Post.css"


function Post({ image, userID, timestamp, message}) {

{/*     const [suggestions, setsugggestions] = useState([]);
    const [suggestion, setsuggestion] = useState('');
    const [show, setShow] = useState('like2');
    const [show2, setShow2] = useState('textforlike');


    const postSuggestion = (event) => {
        event.preventDefault();

        db.collection("posts").doc(postId).collection("suggestions").add({
            text: Suggestion,
            username: userID,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setComment('');
    }


 */}


    return (
        <div className= 'post'>
            <div className='post__top'>

               <div className="post__topInfo">
                   <h3>{userID}</h3>
                    <p>{timestamp}</p>
               </div>

            </div>

            <div className="post__bottom">
                <p>{message}</p>

            </div>
            <div className="post__image">
                <img src={image} alt=""/>
            </div>
            <div className="post__options">
                <div className="post__option">
                <FavoriteBorderSharpIcon/>
                    <p>Support</p>
   
                </div>

                <div className="post__option">
                <ChatBubbleSharpIcon/>
                    <p>Suggest</p>
   
                </div>


            </div>

            {/*   <form onSubmit={postSuggestion}>
                <div className="SuggestionBox">
                    
                    <input className="suggestionInputBox" type="text" placeholder="Write a comment ... " onChange={(e) => setSuggestion(e.target.value)} />
                    <input type="submit" disabled={!Suggestion} className="transparent__submit" />
                </div>
                <p className="pressEnterToPost">Press Enter to post</p>
            </form> */}

        </div>
    )
}

export default Post
