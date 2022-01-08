import "./App.css";
import Header from "./components/header/Header";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/screens/about/About";
import AboutMnnit from "./components/screens/about/AboutMnnit";
import Login from "./components/screens/login/Login";
import Profile from "./components/screens/Profile/Profile";
import Home from "./components/screens/home/Home";
import Blogs from "./components/screens/blogs/Blogs";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/aboutMnnit">
              <AboutMnnit />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/blogs">
              <Blogs />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
