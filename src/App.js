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
      .get("https://pixabay.com/api/?key=12145459-9f7087c163adfae3e8a92828d&q=all&image_type=photo")
      // .then(response =>
      //   response.data.results.map(images => ({
      //     typeImages: `${images.image_type}`,
      //   }))
      // )
      .then(images => {
        this.setState({
          images:images.data.hits,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    console.log(this.state.images)
    const { isLoading, images } = this.state;
    return (
      <div>
        <Navbar />
        <React.Fragment>

          <div>
            {/* {!isLoading ? (
              images.map(images => {
                const { image_type } = images;
                return (
                  <p>{image_type}</p>
                );
              })
            ) : (
                <p>Loading...</p>
              )} */}
             <div className="masonry">
      
              {images.map(img => <div className="item"> <img src={img.largeImageURL} /> </div>)}
              </div>
          </div>
        </React.Fragment>
      </div>
    )
  }
}

export default App;
