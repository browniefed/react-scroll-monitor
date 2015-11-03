import React from 'react';
var ScrollHack = require('./ScrollHack');

class App extends React.Component {
  render() {
    return (
      <div>
        <ScrollHack names={["1","2","3","4"]} />
      </div>
    );
  }
}

module.exports = App