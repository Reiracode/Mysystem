import React, { useState, useEffect, useRef }  from "react";
import { NavLink,  useLocation } from "react-router-dom";
import { logOut, useAuthDispatch } from "./Context";
import useOutsideClick from "./Components/tools/useOutsideClick";

const Navbar = (props) => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  const handleClickOutsides = (event) => {
    setShow(!show);
    console.log(ref.current)
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  };

  useOutsideClick(ref, () => {
    setShow(false);
  });


  const location = useLocation();
  // console.log(location.pathname);
  // logout
  const dispatch = useAuthDispatch();
  const newStyle = show ? "active" : "";

  const handleLogout = async () => {
    try {
      let response = await logOut(dispatch);
      console.log(response);
      props.history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return location.pathname !== "/login" ? (
    <header>
      <ul className="mobile-navlink" >
        <div className={"menu " + newStyle}
          onClick={handleClickOutsides} ref={ref}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </ul>

      <nav className={"main-menu " + newStyle}>
        <ul>
        <li>
          <NavLink to="/prform">PrForm</NavLink>
        </li>
        <li>
          <NavLink to="/poform">PoForm</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/inbox">Inbox</NavLink>
          </li>
        


          
        <li>
          <NavLink to="/about">Outbox</NavLink>
        </li>

          <li>
           
            <a onClick={handleLogout}> <i className="fa-solid fa-arrow-right-from-bracket"></i></a>
           
      
        </li>
      </ul>
      </nav>
    </header>
  ) : null;
};

export default Navbar;
