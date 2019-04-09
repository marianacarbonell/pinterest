import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import axios from 'axios';

class App extends Component {
  state = {

    images: [],
    isLoading: true,
    errors: null,
    apikey: '12145459-9f7087c163adfae3e8a92828d',
  };

  componentDidMount() {
    axios
      .get("https://pixabay.com/api/?key=12145459-9f7087c163adfae3e8a92828d&image_type=photo&q=dog")
      .then(response =>
        response.data.results.map(images => ({
          typeImages: `${images.image_type}`,
        }))
      )
      .then(images => {
        this.setState({
          images,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, images } = this.state;
    return (
      <div>
        <Navbar />
        <React.Fragment>
          <h2>Random User</h2>
          <div>
            {!isLoading ? (
              images.map(images => {
                const { image_type } = images;
                return (
                  <p>{image_type}</p>
                );
              })
            ) : (
                <p>Loading...</p>
              )}
          </div>
        </React.Fragment>
      </div>
    )
  }
}

export default App;
