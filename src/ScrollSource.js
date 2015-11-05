import React from 'react';
import createChainedFunction from './utils/createChainedFunction';
import getUniqueId from "./utils/getUniqueId";
import Handler from "./handler";
import pluck from "lodash/collection/pluck";

export default function Source(collect) {
   
   return function decorate(DecoratedComponent) {

    return class ScrollSource extends React.Component {
      
      static childContextTypes = {
        scrollId: React.PropTypes.string.isRequired
      };
      
      constructor(props, context) {
        super(props, context);
        this._scrollId = getUniqueId();
        this.handleScroll = this.handleScroll.bind(this);
      }

      componentWillUnmount() {
        this._removeListener.remove();
      }
      
      getChildContext() {
        return {scrollId: this._scrollId};
      }

      handleScroll(e) {
        var domComponent = React.findDOMNode(this);
        var scrollTop = domComponent.scrollTop;
        var scrollHeight = domComponent.scrollHeight;
        var bounding = domComponent.getBoundingClientRect();

        var childrenCollect = Handler.getScrollListeners(this._scrollId).map((cb) => cb(scrollTop, scrollHeight, bounding, e))
        var newCollect = collect(this.props, pluck(childrenCollect, 'collect'));

        childrenCollect.forEach((col) => {
          col.update({
            ...col.collect,
            ...newCollect
          })
        })

      }

      render() {
        let props = {
          ...this.props
        }
        
        props.onScroll = createChainedFunction(this.handleScroll, this.props.onScroll);

        return (
          <DecoratedComponent 
            {...props}
            {...this.state}
          />
        );
      }
    };
  }     
}