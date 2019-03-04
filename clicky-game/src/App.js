import React from 'react'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'
import CryptoCard from './components/CryptoCard'
import cryptocurrencies from './cryptocurrencies.json'



render() {
  <Wrapper>    
    <Navbar score={this.state.score} />
    <Jumbotron />
    <CryptoCard 
      imageClick={this.imageClick}
      id={crypto.id}
      key={crypto.id}
      image={crypto.image} 
      />
    <Footer />
  </Wrapper>
}

export default App;