import React from "react";
import ReactDOM from "react-dom";
// @ts-ignore
import Phone from "../../public/images/phone.svg";
// @ts-ignore
import Msg1 from "../../public/images/message_1.svg";
// @ts-ignore
import Msg2 from "../../public/images/message_2.svg";
// @ts-ignore
import Msg3 from "../../public/images/message_3.svg";

 export default function Home(): React.ReactElement<{className: string},"main"> {
 return (
   <main className="homepage-content">
   <div className="homepage-intro">
<div className="main-animation">
 <img className="phone mimg" src={Phone}></img>
 <img className="msg1 mimg mimg-1" src={Msg1}></img>
 <img className="msg2 mimg mimg-2" src={Msg2}></img>
 <img className="msg3 mimg mimg-3" src={Msg3}></img>
</div>
<section className="intro">
  <h1 className="main-heading">Make Your Chat 
More <i className="marked">Intimate!</i></h1>
<p className="main-text">Text chat is great or whatever, but, somtimes you want things to be more personal. More intimate and face-to-face. What better way to do it than with our lightweight and convinient video chat platform - <b>Talkr!</b> Give it a try! Or dont, im not your fucking mom.</p>
<div className="intro-buttons">
<button className="intro-button ib-1">Get Started With <b>Talkr</b>!</button>
<button className="intro-button ib-2">Sign In</button>
</div>
</section>
</div>
<div className="homepage-quotes">
<div className="homepage-quote hq-1">
 <blockquote>
  {"\"I cant get enought of Talkr! Its a great way for me to talk to my boyfriend who lives in australia. Thanks to this platform, our relationship is healthier than its been in a long time!\""}
</blockquote>
<br/>
 <small>- Said noone ever</small>
</div>
 <div className="homepage-quote hq-2">
 <blockquote>
  {"\"I think this platform is an amazing way for people to connect! It serves as a place for me to connect with my drinkin buddies, and get absolutley fucking abliterated over whiskey. Best part is none of us have to drive!\""}
</blockquote>
<br/>
 <small>- Some drunk dude</small>
</div>
 <div className="homepage-quote hq-3">
 <blockquote>
  {"\"Talkr is a lifesaver! Ever since the pandemic started i had no way to do anything, but now, i can do things. I guess. I like Talkr and you should too, go make an account now!\""}
</blockquote>
<br/>
 <small>- A fake person</small>
</div> 
</div>
 </main>
 )
} 
