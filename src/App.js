import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        {/**NewComment */}
        <div>
          <textarea cols='30' rows='10'></textarea>
          <button>Send</button>
        </div>
        {/** Comments */}
        <div>
          {/**Comment */}
          <div>Comment 1</div>
          <div>Comment 2</div>
          <div>Comment 3</div>
          <div>Comment 4</div>
        </div>
      </div>
    );
  }
}

export default App;
