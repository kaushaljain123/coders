import React from "react";
import { Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log(userInfo.isAdmin);

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header className="header">
      <Link className="links" to='/'><p className="logo">Bringonn.coders</p></Link>

      <nav className="main-nav">
        {userInfo && userInfo.isAdmin ? (
          <ul className="main-nav-list">
            <Link className="links" to='/students'><li>Students</li></Link>
            <Link className="links" to='/files'><li>Files</li></Link>
            <li>Notes</li>
            <li>Questions</li>
            <Link className="links" to='/test'><li>Quiz</li></Link>
          </ul>
        ) : (
          <ul className="main-nav-list">
            <li>Try JS</li>
            <li>Projects</li>
            <li>Notes</li>
            <li>Questions</li>
            <Link className="links" to='/test'><li>Test</li></Link>
          </ul>
        )}

      </nav>

      <p>Welcome, {userInfo.name} <span className="logout" onClick={logoutHandler}>Logout</span></p>
    </header>
  );
};

export default Header;
