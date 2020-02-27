import React from 'react';
import Comments from './Comments';
import NewComment from './NewComment';
class App extends React.Component {
  state = {
    comments: ['Comment 1', 'Comment 2', 'Comment 3', 'Comment 4']
  };
  sendComment = comment => {
    this.setState({
      comments: [...this.state.comments, comment]
    });
  };
  /**the handleChange it's not the app responsabilit
so it needs to be moved to it's own component  */
  render() {
    return (
      <div>
        {/**NewComment */}
        <NewComment sendComment={this.sendComment} />
        {/** Comments */}
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
