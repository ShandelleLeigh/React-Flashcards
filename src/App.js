import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Deck from './Deck';
import Card from './Card';
import CardForm from './CardForm';


class App extends Component {



  toggleShowBack = () => {
    this.setState( state => {
      return { showBack: !state.showBack }
    });
  }

  visibleItems = () => {
    const { cards, filter } = this.state;
    switch(filter) {
      case 'Active':
        return cards.filter( t => !t.hidden )
      case 'Hidden':
        return cards.filter( t => t.hidden )
      default:
        return cards
    }
  }

  handleClick = (id) => {
    const { cards } = this.state;
    this.setState({
      cards: cards.map(card => {
        if (card.id === id) {
          return {
            ...card,
            hidden: !card.hidden
          }
        }

        return card
      })
    })
  }

  render() {
    // const {  place holder text  }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Flashcards</h1>
        </header>
        <Deck
          cardClick={this.handleClick}
          cards={this.cards}
        />
        <CardForm addItem={this.addCard}/>
        <Deck
          cardClick={this.handleClick}
          cards={this.cards}
        />
      </div>
    );
  }
}

export default App;
