import React from 'react';
import ScrollWatch from './ScrollWatch';

class ScrollWrap extends React.Component {
  render() {
    return (
      <div {...this.props}>
          <ScrollWatch />
      </div>
    )
  }
}

module.exports = ScrollWrap