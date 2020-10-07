import React, {Component} from 'react';

import './App.css';
import './reset.css';
import './responsive.css';
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Nav from './Components/NavBar/Nav';

class App extends Component {
  constructor(){
    super()
    this.state = {
      page: 'Home'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.setState({page: e.target.value})
  }
  render(){
    let {page} = this.state
  
    return (
      <main className="App">
        <Nav />
        <section>
          <Home />
          {/* <About /> */}
        </section>
      </main>
    );
  }
}

export default App;
