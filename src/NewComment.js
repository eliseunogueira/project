import React from 'react';

class NewComment extends React.Component {
  state = {
    newComment: ''
  };
  handleChange = event => {
    this.setState({
      newComment: event.target.value
    });
  };
  sendComment = () => {
    this.props.sendComment(this.state.newComment);
    this.setState({
      newComment: ''
    });
  };
  render() {
    return (
      <div>
        <textarea
          cols='30'
          rows='10'
          value={this.state.newComment}
          onChange={this.handleChange}></textarea>
        <button onClick={this.sendComment}>Send</button>
      </div>
    );
  }
}
export default NewComment;
