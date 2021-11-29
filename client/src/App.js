import React, { Component } from "react";

import API from './api';
import './App.css';

class App extends Component() {

  constructor(props) {
    super(props);
    let cardfunc = this.getcards.bind(this);
    let ebayfunc = this.getebay.bind(this);
    this.state = {
      cardfunction: cardfunc,
      ebayfunction: ebayfunc,
      cardlist: [],
      ebayResults: [],
    };
  }

  async getcards(queryobject) {

  }

  async getebay(queryobject) {

  }

  render() {
    return (
      <>

      </>
    )
  }
}

export default App;
