import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

class App extends Component {
  state = {

    images: [],
    isLoading: true,
    errors: null,
    apikey: '12145459-9f7087c163adfae3e8a92828d',
    page: 20
  };

  componentDidMount() {

    axios
      .get("https://pixabay.com/api/?key=12145459-9f7087c163adfae3e8a92828d&q=all&image_type=photo")
    
      .then(images => {
        this.setState({
          images:images.data.hits,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  fetchData = () =>{
    let start = this.state.page + 20;
    this.setState({
      page: start

    })
    
    axios
      .get("https://pixabay.com/api/?key=12145459-9f7087c163adfae3e8a92828d&q=all&image_type=photo&page="+(this.state.page/20)+"&per_page=20")
    
      .then(images => {
        let arr= images.data.hits
        this.setState({
          images:arr.concat(this.state.images),
          isLoading: false
        });
        console.log(arr.concat(this.state.images));
      })
  }



  render() {
    console.log(this.state.images)
    const { isLoading, images } = this.state;
    return (
      <div>
        <Navbar />
        <React.Fragment>

          <div className="container">
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
        
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchData}
          hasMore={true}
          >{this.images}
        </InfiniteScroll>
      </div>
    )
  }
}

export default App;
