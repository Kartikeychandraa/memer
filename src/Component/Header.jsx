import React from 'react';
import './CSS/Header.css';
function Head(){
  return(
    <nav className="head">
 <a href = "Home" className="navbar-brands links">Home</a>
<a href = "Trending Meme" className="navbar-brands links">Trending Meme</a>
 <a href = "#" className="navbar-brands links" >Contact Us</a> 
 
</nav>
  );
  
}
export default Head;