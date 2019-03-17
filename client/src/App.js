import React, { Component } from "react";
import CryptoCard from "./components/CryptoCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import cryptocurrencies from "./cryptocurrencies.json";
import "./App.css";

function shuffleCryptos(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  // Set this.state
  state = {
    cryptocurrencies,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "You Lose.",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCryptos = shuffleCryptos(cryptocurrencies);
    this.setState({ cryptocurrencies: shuffledCryptos });
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          title="Crypto Clicker"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Jumbotron>
          Click the cryptocurrency icons, but don't hit any duplicates!!
        </Jumbotron>

        <Container>
          <Row>
            {this.state.cryptocurrencies.map(crypto => (
              <Column size="md-3 sm-6">
                <CryptoCard
                  key={crypto.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={crypto.id}
                  image={crypto.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;

// class App extends Component {
//   state = {
//     cryptocurrencies,
//     clickedCryptocurrencies: [],
//     score: 0,
//     topScore: 0,
//     rightWrong: "",
//   };

//   // When image card clicked, the cryptocurrency is taken out of the array
//   imageClick = e => {

//     // if a cryptocurrency is clicked again, the game resets and the cards shuffled
//     if (this.state.clickedCryptocurrencies.indexOf(e) === -1) {
//       this.handleIncrement();
//       this.setState({
//         clickedCryptocurrencies: this.state.clickedCryptocurrencies.concat(id) }),

//     } else {
//       this.handleReset();
//     }
//   };

//         // if you get all 12 correct, user is alerted and game resets
//         // () => {
//         //   if (this.state.score === 12) {
//         //     alert("You are an early adopter!!");
//         //     this.setState({
//         //       cryptocurrencies: this.state.cryptocurrencies.sort((a, b) => {
//         //         return 0.5 - Math.random();
//         //       }),
//         //       clickedCryptocurrencies: [],
//         //       score: 0
//         //     });
//         //   }
//         // }

//     }

//   render() {
//     return (
//       <>
//         <Wrapper>
//           <Jumbotron />
//           <Navbar score={this.state.score} />
//           {this.state.cryptocurrencies.map(crypto => (
//             <CryptoCard
//               imageClick={this.imageClick}
//               id={crypto.id}
//               key={crypto.id}
//               image={crypto.image}
//             />
//           ))}
//         </Wrapper>
//       </>
//     );
//   }
// }
// export default App;
