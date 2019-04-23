import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from './Components/Modal';
import Image from './Components/Image'; 
import './Components/Img.css'
class App extends Component {
  state = {

    images: [],
    isLoading: true,
    errors: null,
    apikey: '12145459-9f7087c163adfae3e8a92828d',
    page: 20,
    toShowing: false,
  };

  componentDidMount() {

    axios
      .get("https://pixabay.com/api/?key=12145459-9f7087c163adfae3e8a92828d&q=all&image_type=photo")

      .then(images => {
        this.setState({
          images: images.data.hits,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  fetchData = () => {
    let start = this.state.page + 20;
    this.setState({
      page: start

    })

    axios
      .get("https://pixabay.com/api/?key=12145459-9f7087c163adfae3e8a92828d&q=all&image_type=photo&page=" + (this.state.page / 20) + "&per_page=20")

      .then(images => {
        let arr = images.data.hits
        this.setState({
          images: arr.concat(this.state.images),
          isLoading: false
        });
        console.log(arr.concat(this.state.images));
      })
  }

  openModal = (i) => {
    this.setState({
      toShowing: i.url
    });
  }

  closeModal = () => {
    this.setState({
      toShowing: false
    });
  }

  getImage(){
  const showImage = this.state.images.map((img, i) =>{
    return (
      <Image
      key={i}
      pushClick={this.openModal}
      url={img.previewURL}>
      </Image>
    )
  })
  return showImage;
  }


  render() {
    return (
      <div>
      {this.state.toShowing && <Modal pushClick={this.closeModal} imgUrl={this.state.toShowing}></Modal>}

        <Navbar />
    
        <div className="masonry">
        <InfiniteScroll 
        style={{overflow:'none'}}
          dataLength={this.state.images.length}
          next={this.fetchData}
          hasMore={true}
        >{this.state.images && this.getImage()}
        </InfiniteScroll>
      </div>
      </div>
      
    )
  }
}

export default App;
