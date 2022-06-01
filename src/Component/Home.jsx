import React from 'react';
import './CSS/Home.css';


function Home()
  {return(
    <div>
  <div className="home_div">   
    <div>
    <h1 className="title">Meme Generator
</h1>
      <h3>The Memer helps you make your own meme for any occasion. Customize your meme with free images, fonts, and more.
</h3>
    <button className="Btn">Design Your own Meme</button>
 </div>
<img src="https://c.tenor.com/Lbrr3HR3CnkAAAAd/snoop-dogg-rap.gif"  className="img" 
 />
    </div>
      <Home1 />
      <Home2 />
      <Home3 />
    </div>  
  )}



function Home1(){
return (
  <div className="home_div">
  <div className="card"><h1>
  Customize and personalize with this meme generator app.
  </h1>
  <p>
  If you want to create a viral meme, you need to start with a great idea. Then, you need an eye-catching image and the software to put everything together. Use Adobe Express as a meme creator app, and your next big idea might just go viral around the world. Adobe Express doesn’t just let you create a meme, it lets you customize it, too. This means your creations will stand out from what’s already being shared across social media platforms. Make as many changes as you wish to color schemes, images, text, alignment, and themes.
  </p>
  </div>  
    
  <div>

    <img src="https://s3.yimg.com/lm/ysbp/img/ZElZpkIUaPCVaJCT_9bPkUH4TznXk8w_oG77SbtP6bJwRe8d3i2QZkZfa2JkHR0i.png" className="img" width="500px" height="500px" />
    
  </div>
  </div>
)
  
}

function Home2(){
  return(
  <div className="home_div">
  <div className="card"><h1>
  Why use Memer as your meme editor?
  </h1>
  <p>
  Some memes are funny, some are cute, but the most successful viral memes involve a combination of eye-catching imagery, thoughtful design, and brilliant messaging. The memer can help you make memes that professional designers would be proud to call their own. This means your creations will stand out from what’s already being shared across social media platforms. Make as many changes as you wish to color schemes, images, text, alignment, and themes. Best of all,Memer is free and easy to use.
  </p>
  </div>    
  <div>
  <img src="https://authority.builders/blog/wp-content/uploads/2018/10/Why_meme.jpg" className="img" width="500px" height="500px" />
  </div>
  </div>
  )
}


function Home3(){
  return(
  <div className="faq">
  
    <h1>
Frequently asked questions.</h1>
     <div className="faq_card">
       <h2>
         What is the typical size for a meme?
       </h2>
       <p>
       Since memes are generally shared most on social media platforms, the typical format is a square. Choose a square template or set your canvas to 1080px by 1080px to get started.
       </p>
    </div>
    <br />
        <div className="faq_card">
       <h2>
         What are common fonts used in memes?
       </h2>
       <p>
      Impact is the classic meme font, while Arial and Comic Sans are other popular choices. Get the full meme effect by choosing white for your font color and using the Outline Text Effect so your copy standouts over any image.
       </p>
    </div>


    <br />
        <div className="faq_card">
       <h2>
       How do I animate my meme?
       </h2>
       <p>
       Since memes are generally shared most on social media platforms, the typical format is a square. Choose a square template or set your canvas to 1080px by 1080px to get started.
       </p>
    </div>



    <br />
        <div className="faq_card">
       <h2>
        Can I create my own meme template?
       </h2>
       <p>
Any new or existing project can be turned into a shareable template. Open your project, choose the Share option in the top right, and follow the prompts to make your own template. Access your templates from your library and share with collaborators.
       </p>
    </div>
<br />    


    
  
  </div>
  
  )  
}
export default Home;
