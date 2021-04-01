
import React from "react";
import ReactDOM from "react-dom";

export default function Footer(): React.ReactElement<{className: string},"footer"> {
 return (
 <footer className="main-footer">
 <a href="https://github.com/ZippCodder/talkr" target="_blank">
 <img className="github-img" src="https://icon-library.com/images/github-icon-png/github-icon-png-29.jpg" />
 </a>
 <p className="copyright">&#169; Copyright <b>Talkr</b> - 2021</p>
</footer>
)
}
