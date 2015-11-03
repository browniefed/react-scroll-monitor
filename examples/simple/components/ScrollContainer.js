import React from 'react';
import ScrollWatch from './ScrollWatch';

class ScrollContainer extends React.Component {
  render() {
    return (
      <div {...this.props}>
        <ScrollWatch name="1" style={{height: 100, backgroundColor: '#CCC'}}>
          ABCDEFG
        </ScrollWatch>
        <ScrollWatch name="2" style={{height: 100, backgroundColor: '#CCC'}}>
          ABCDEFG
        </ScrollWatch>
        <ScrollWatch name="3" style={{height: 100, backgroundColor: '#CCC'}}>
          ABCDEFG
        </ScrollWatch>
        <ScrollWatch name="4" style={{height: 100, backgroundColor: '#CCC'}}>
          ABCDEFG
        </ScrollWatch>
      </div>
    )
  }
}

module.exports = ScrollContainer