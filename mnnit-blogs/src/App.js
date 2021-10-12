import "./App.css";
import Header from "./components/Header";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Home from "./components/home/Home";
import AboutMnnit from "./components/AboutMnnit";
import About from "./components/About";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Router>
        <div className="App" >
          <Switch>
            <Route path="/about">
            <Header></Header>
              <About></About>
            </Route>
            <Route path="/aboutMnnit">
            <Header></Header>
              <AboutMnnit />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
            <Header></Header>
              <Profile />
            </Route>
            <Route path="/">
            <Header></Header>
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
