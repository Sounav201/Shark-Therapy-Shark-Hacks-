import React, { useState } from 'react'
import './CreatePosts.css';
function CreatePosts() {

    const [input,setInput] = useState('')
    const [imageUrl,setImageUrl] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();


        //some clever db stuff
        setInput("");
        setImageUrl("");

    };
    return (
        <div className="makePosts">
          <div className='Post__top'>

            <form>
                
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="makePost__input" placeholder ={`Share your thoughts`}/>
                
                <input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="makePost__input" placeholder="Post a picture mate😊 image URL (Here) "/>

                <button onClick={handleSubmit} type="submit"> Hidden Submit</button>
            </form>


         </div>
     
        </div>
    )
}

export default CreatePosts
