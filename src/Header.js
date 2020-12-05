import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className='header'>

        <div className='header__left'>

            
        <a href="https://www.animatedimages.org/cat-sharks-516.htm">
        <img className="shark-logo" src="https://www.animatedimages.org/data/media/516/animated-shark-image-0068.gif" border="0" alt="animated-shark-image-0068" />
        </a>
        </div>

        <div className='header__middle'>
        <h2>Fear-Hub</h2>
        <p>Go ahead.  We'll keep you anonymous </p>
        </div>
        <div className="header__right">
          <button className="Game"><a href="#">Go to Game</a></button>  
        </div>
        </div>
    )
}

export default Header


/*<a href="https://www.animatedimages.org/cat-sharks-516.htm">
<img className="shark-logo" src="https://www.animatedimages.org/data/media/516/animated-shark-image-0068.gif" border="0" alt="animated-shark-image-0068" /></a> */