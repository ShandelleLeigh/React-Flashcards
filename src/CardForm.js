import React from 'react';

class CardForm extends React.Component {
  state = { text: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state.text)
    this.setState({ text: '' })
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={text}
          onChange={this.handleChange}
          required
          placeholder="Add Card"
        />
      </form>
    )
  }
}

export default CardForm;
