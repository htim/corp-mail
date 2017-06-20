import React, { Component } from 'react';
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom"

class App extends Component {
  render() {

    return (
      <HomePage />
    );
  }
}

export default App;
