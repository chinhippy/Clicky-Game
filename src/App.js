import React from 'react'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'
import CryptoCard from './components/CryptoCard'
import cryptocurrencies from './cryptocurrencies.json'

class App extends Component {
  state = {
    // message: "Click a crypto image to begin!",
    currentScore: 0,
    topScore: 0,
    Cryptocurrencies: Cryptocurrencies,
    notClicked: Cryptocurrencies
  }
}


render() {
  <Wrapper>
    <Jumbotron />    
    <Navbar score={this.state.score} />
    {this.state.cryptocurrencies.map(crypto => (       
      <CryptoCard 
        imageClick={this.imageClick}
        id={crypto.id}
        key={crypto.id}
        image={crypto.image} 
        />
      ))}
    <Footer />
  </Wrapper>
}

export default App;