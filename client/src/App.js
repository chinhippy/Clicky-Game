import React, { Component } from "react";
import Wrapper from './components/Wrapper'
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import CryptoCard from "./components/CryptoCard";
import cryptocurrencies from "./cryptocurrencies.json";

class App extends Component {
  state = {
    cryptocurrencies,
    clickedCryptocurrencies: [],
    score: 0
  };

  // When image card clicked, the cryptocurrency is taken out of the array
  imageClick = event => {
    const currentCryptocurrencies = event.target.alt;
    const cryptocurrenciesAlreadyClicked =
      this.state.clickedCryptocurrencies.indexOf(currentCryptocurrencies) > -1;

    // if a cryptocurrency is clicked again, the game resets and the cards shuffled
    if (cryptocurrenciesAlreadyClicked) {
      this.setState({
        cryptocurrencies: this.state.cryptocurrencies.sort((a, b) => {
          return 0.5 - Math.random();
        }),
        clickedCryptocurrencies: [],
        score: 0
      });
      alert("Sorry, you lost");

      // if you card a previously unclicked crypto, your scrore increments and cards shuffle
    } else {
      this.setState(
        {
          cryptocurrencies: this.state.cryptocurrencies.sort((a, b) => {
            return 0.5 - Math.random();
          }),
          clickedCryptocurrencies: this.state.clickedCryptocurrencies.concat(
            currentCryptocurrencies
          ),
          score: this.state.score + 1
        },

        // if you get all 12 correct, user is alerted and game resets
        () => {
          if (this.state.score === 12) {
            alert("You are an early adopter!!");
            this.setState({
              cryptocurrencies: this.state.cryptocurrencies.sort((a, b) => {
                return 0.5 - Math.random();
              }),
              clickedCryptocurrencies: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <>
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
        </Wrapper>
      </>
    );
  }
}
export default App;
