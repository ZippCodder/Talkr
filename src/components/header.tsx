import React from "react";
import ReactDOM from "react-dom";

const {useState,Fragment,createRef,useRef,useEffect} = React;

// Burger menu and search icons ...

 function Options(props: {searchOpen: [boolean,(arg0: boolean) => void]}): React.ReactElement<{},"Fragment"> {

  let [isSearchOpen,setIsSearchOpen] = props.searchOpen;
     let [isMenuOpen,setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
      const resize = () => { if (window.innerWidth > 800) { setIsSearchOpen(false) }};
      window.addEventListener("resize",resize);
      return () => { window.removeEventListener("resize",resize) }
    },[]);

   function openMenu(): void {
     if (!isMenuOpen) {
       // document.body.style.overflowY = "hidden";
       document.querySelector<HTMLDivElement>(".mdb-1")!.style.transform = "translateY(calc((2em/5)*2)) rotate(45deg)";
       document.querySelector<HTMLDivElement>(".mdb-2")!.style.transform = "rotate(-45deg)";
       document.querySelector<HTMLDivElement>(".mdb-3")!.style.transform = "translateY(calc((-2em/-5)*-2)) rotate(45deg)";
       setIsMenuOpen(true);  
     } else {
       document.body.style.overflowY = "scroll";
         document.querySelector<HTMLDivElement>(".mdb-1")!.style.transform = "translateY(0) rotate(0deg)";
       document.querySelector<HTMLDivElement>(".mdb-2")!.style.transform = "rotate(0deg)";
       document.querySelector<HTMLDivElement>(".mdb-3")!.style.transform = "translateY(0) rotate(0deg)";     
       setIsMenuOpen(false);
     }
  }

  function openSearch(): void {
    if (!isSearchOpen) {
document.body.style.overflowY = "scroll";
document.querySelector<HTMLDivElement>(".mdb-1")!.style.transform = "translateY(0) rotate(0deg)";                 
document.querySelector<HTMLDivElement>(".mdb-2")!.style.transform = "rotate(0deg)";                               
document.querySelector<HTMLDivElement>(".mdb-3")!.style.transform = "translateY(0) rotate(0deg)"; 
       setIsMenuOpen(false);
      setIsSearchOpen(true);
    } else {
      setIsSearchOpen(false);
   }
  }

  return (
   <Fragment>

   {/* Search icon */}

   <span className="search-icon" style={{transform: (!isSearchOpen) ? "translateX(0)":"translateX(1.5em)"}}>
   <input className="menu-search-profile-input" style={{width: (isSearchOpen) ? "calc(100vw - 5.5em)":"0",paddingLeft: (isSearchOpen) ? "0.5em":"0",paddingRight: (isSearchOpen) ? "0.5em":"0"}} placeholder="Search other profiles"></input>
   <i className="fas fa-search" onClick={openSearch}></i>
   </span>

   {/* Burger menu */}

   <div className="main-dropdown" onClick={openMenu} style={{transform: (!isSearchOpen) ? "translateX(0)":"translateX(3em)"}}>
  <div className="main-dropdown-icon">
   <div className="main-dropdown-bar mdb-1"></div>
   <div className="main-dropdown-bar mdb-2"></div>
   <div className="main-dropdown-bar mdb-3"></div>
  </div> 
  </div>
   <div className="main-dropdown-content" style={{transform: (isMenuOpen) ? "translateX(0%)":"translateX(100%)",position: (isMenuOpen) ? "fixed":"absolute"}}>
   <ul>
    <li><h2>Home</h2></li>
    <li><h2>Profile</h2></li>
    <li><h2>Settings</h2></li>
    <li><h2>Sign Up</h2></li>
    <li><h2>Log In</h2></li>
   </ul>
   </div>
  </Fragment>
 )
} 

// Header content

export default function Header(): React.ReactElement<{className: string},"header"> {

  const [isSearchOpen,setIsSearchOpen] = useState<boolean>(false);

 return (
  <header className="main-header">
 <h1 className="main-logo">Talkr</h1>
 <small className="sub-text">Your place to chat!</small>
 <span className="search-profile">
 <input className="search-profile-input" placeholder="Search other profiles"></input>
 <button className="search-profile-button"><i className="fas fa-search"></i></button>
 </span>
 <div className="main-options">
 <Options searchOpen={[isSearchOpen,setIsSearchOpen]} />
 </div>
</header>
 )
}
