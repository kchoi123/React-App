import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedIds: [],
    score: 0,
    topScore: 0
  };

  handleClick = id => {
    const shuffledArr = this.handleShuffle(friends);
    this.setState({ friends: shuffledArr });

    if (this.state.clickedIds.includes(id)) {
      this.setState({
        friends: shuffledArr,
        score: 0,
        clickedIds: []
      });
      alert("GAME OVER!");
      // GAME OVER
    } else {
      const newScore = this.state.score + 1;

      this.setState({
        clickedIds: this.state.clickedIds.concat([id]),
        score: newScore
      });

      if (newScore === 12) {
        this.setState({
          topScore: newScore
          // WINNER
        });
        this.handleShuffle(friends);
        this.setState({
          friends: shuffledArr,
          clickedIds: [],
          score: 0
        });
      } else if (newScore > this.state.topScore) {
        this.setState({ topScore: newScore });
      }
    }
  };

  handleShuffle = friends => {
    for (let i = friends.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [friends[i], friends[j]] = [friends[j], friends[i]];
    }
    return friends;
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} topScore={this.state.topScore}>
          Clicky Game!
        </Title>
          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              click={this.handleClick}
            />
          ))}
      </Wrapper>
    );
  }
}

export default App;
