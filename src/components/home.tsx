import React from "react";
import ReactDOM from "react-dom";
import Phone from "../../public/images/phone.svg";
import Msg1 from "../../public/images/message_1.svg";
import Msg2 from "../../public/images/message_2.svg";
import Msg3 from "../../public/images/message_3.svg";

 export default function Home(): React.ReactElement {
 return (
   <main className="homepage-content">
   <div className="homepage-intro">
  <h1 className="main-heading">Make Your Chat 
More <i className="marked">Intimate!</i></h1>
<div className="main-animation">
 <img className="phone mimg" src={Phone}></img>
 <img className="msg1 mimg mimg-1" src={Msg1}></img>
 <img className="msg2 mimg mimg-2" src={Msg2}></img>
 <img className="msg3 mimg mimg-3" src={Msg3}></img>
</div>
<p className="main-text">Text chat is great or whatever, but, somtimes you want things to be more personal. More intimate and face-to-face. What better way to do it than with our lightweight and convinient video chat platform - <b>Talkr!</b> Give it a try! Or dont, im not your fucking mom.</p>
<div className="intro-buttons">
<button className="intro-button ib-1">Get Started With <b>Talkr</b>!</button>
<button className="intro-button ib-2">Sign In</button>
</div>
</div>
 </main>
 )
} 
