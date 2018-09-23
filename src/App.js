import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {
    render() {
      return (
        <div className="App">
          <Header branding="Contact Manager" />
          <Contact name="Co Code" email="co@code.com" phone="123-5-6789" />
          <Contact name="Cla Wo" email="cla@wo.com" phone="666-9-11" />
        </div>
    );
  }
}

export default App;
