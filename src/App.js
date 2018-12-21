import React, { Component } from 'react';
import Axios from 'axios';
import Navbars from './components/Navbar';
import Home from './Container/Home';

class App extends Component {
  state = {
    posts: []
  };

  getDataFromApi = () => {
    Axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(res => {
        this.setState({
          posts: res.data
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getDataFromApi();
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <Navbars />
        <Home posts={posts} />
      </div>
    );
  }
}

export default App;
