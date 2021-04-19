"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = _react["default"].useState,
    Fragment = _react["default"].Fragment,
    createRef = _react["default"].createRef,
    useRef = _react["default"].useRef,
    useEffect = _react["default"].useEffect; // Burger menu and search icons ...

function Options(props) {
  var _props$searchOpen = _slicedToArray(props.searchOpen, 2),
      isSearchOpen = _props$searchOpen[0],
      setIsSearchOpen = _props$searchOpen[1];

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  useEffect(function () {
    var resize = function resize() {
      if (window.innerWidth > 800) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("resize", resize);
    return function () {
      window.removeEventListener("resize", resize);
    };
  }, []);

  function openMenu() {
    if (!isMenuOpen) {
      // document.body.style.overflowY = "hidden";
      document.querySelector(".mdb-1").style.transform = "translateY(calc((2em/5)*2)) rotate(45deg)";
      document.querySelector(".mdb-2").style.transform = "rotate(-45deg)";
      document.querySelector(".mdb-3").style.transform = "translateY(calc((-2em/-5)*-2)) rotate(45deg)";
      setIsMenuOpen(true);
    } else {
      document.body.style.overflowY = "scroll";
      document.querySelector(".mdb-1").style.transform = "translateY(0) rotate(0deg)";
      document.querySelector(".mdb-2").style.transform = "rotate(0deg)";
      document.querySelector(".mdb-3").style.transform = "translateY(0) rotate(0deg)";
      setIsMenuOpen(false);
    }
  }

  function openSearch() {
    if (!isSearchOpen) {
      document.body.style.overflowY = "scroll";
      document.querySelector(".mdb-1").style.transform = "translateY(0) rotate(0deg)";
      document.querySelector(".mdb-2").style.transform = "rotate(0deg)";
      document.querySelector(".mdb-3").style.transform = "translateY(0) rotate(0deg)";
      setIsMenuOpen(false);
      setIsSearchOpen(true);
    } else {
      setIsSearchOpen(false);
    }
  }

  return /*#__PURE__*/_react["default"].createElement(Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "search-icon",
    style: {
      transform: !isSearchOpen ? "translateX(0)" : "translateX(1.5em)"
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "menu-search-profile-input",
    style: {
      width: isSearchOpen ? "calc(100vw - 5.5em)" : "0",
      paddingLeft: isSearchOpen ? "0.5em" : "0",
      paddingRight: isSearchOpen ? "0.5em" : "0"
    },
    placeholder: "Search other profiles"
  }), /*#__PURE__*/_react["default"].createElement("i", {
    className: "fas fa-search",
    onClick: openSearch
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "main-dropdown",
    onClick: openMenu,
    style: {
      transform: !isSearchOpen ? "translateX(0)" : "translateX(3em)"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "main-dropdown-icon"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "main-dropdown-bar mdb-1"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "main-dropdown-bar mdb-2"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "main-dropdown-bar mdb-3"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "main-dropdown-content",
    style: {
      transform: isMenuOpen ? "translateX(0%)" : "translateX(100%)",
      position: isMenuOpen ? "fixed" : "absolute"
    }
  }, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Home")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Profile")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Settings")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Sign Up")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Log In")))));
} // Header content


function Header() {
  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSearchOpen = _useState4[0],
      setIsSearchOpen = _useState4[1];

  return /*#__PURE__*/_react["default"].createElement("header", {
    className: "main-header"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "main-logo"
  }, "Talkr"), /*#__PURE__*/_react["default"].createElement("small", {
    className: "sub-text"
  }, "Your place to chat!"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "search-profile"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "search-profile-input",
    placeholder: "Search other profiles"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "search-profile-button"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fas fa-search"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "main-options"
  }, /*#__PURE__*/_react["default"].createElement(Options, {
    searchOpen: [isSearchOpen, setIsSearchOpen]
  })));
}