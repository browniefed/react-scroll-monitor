import React from 'react';
import ReactDOM from 'react-dom';
import {ScrollListener} from 'library-boilerplate';

class ScrollWatch extends React.Component {
  componentDidMount() {
    setTimeout(() => this.props.triggerUpdate(), 3000);
  }

  render() {
    return (
      <div {...this.props}>
        {this.props.selected + ''}
      </div>
    )
  }
}

var collect = function(scrollTop, scrollHeight, bounding, props, component) {
  var domComponent = ReactDOM.findDOMNode(component);
  var offset = (bounding.top * -1) + scrollTop

  var {
    height,
    top
  } = domComponent.getBoundingClientRect()

  var position = (top + height) - bounding.top;

  return {  
    inRange: position > 0,
    scrollTop: scrollTop,
    name: props.name
  }
}

function execute(oldProps, newProps) {
  if (oldProps.selected === newProps.selected) return;
  return newProps;
}

module.exports = ScrollListener(collect, execute)(ScrollWatch)