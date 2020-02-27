import React from 'react';

class App extends React.Component {
  state = {
    newComent: '',
    comments: ['Comment 1', 'Comment 2', 'Comment 3', 'Comment 4']
  };
  sendComment = () => {
    this.setState({
      comments: [...this.state.comments, this.state.newComent],
      newComent: ''
    });
  };
  handleChange = event => {
    this.setState({
      newComent: event.target.value
    });
  };
  render() {
    return (
      <div>
        {/**NewComment */}
        <div>
          <textarea
            cols='30'
            rows='10'
            value={this.state.newComent}
            onChange={this.handleChange}></textarea>
          <button onClick={this.sendComment}>Send</button>
        </div>
        {/** Comments */}
        <div>
          {/**Comment */}
          {this.state.comments.map(c => {
            return <div>{c}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
