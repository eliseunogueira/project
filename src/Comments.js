import React from 'react';
import Comment from './Comment';
class Comments extends React.Component {
  render() {
    return (
      <div>
        {/**Comment */}
        {this.props.comments.map(c => {
          return <Comment c={c} />;
        })}
      </div>
    );
  }
}
export default Comments;
