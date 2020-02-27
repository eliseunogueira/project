import React from 'react';

class Comments extends React.Component {
  render() {
    return (
      <div>
        {/**Comment */}
        {this.props.comments.map(c => {
          return <div>{c}</div>;
        })}
      </div>
    );
  }
}
export default Comments;
