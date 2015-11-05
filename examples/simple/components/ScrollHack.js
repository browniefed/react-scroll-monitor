import React from 'react';
import {ScrollSource} from 'library-boilerplate';
import ScrollContainer from './ScrollContainer';
import find from 'lodash/collection/find';

class ScrollHack extends React.Component {
  render() {
    return (
      <div {...this.props}  style={{overflow: 'auto', height: '100%'}}>
          <ScrollContainer style={{height: 5000}}/>
      </div>
    )
  }
}

function collect(props, childProps) {

  var selected = find(childProps, ({inRange}) => inRange === true )
  
  return {
    something: 'ABC',
    selected: selected.name
  }
}

module.exports = ScrollSource(collect)(ScrollHack);