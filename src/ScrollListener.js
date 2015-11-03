import React from 'react';
import Handler from "./handler";

export default function Listen(collect) {

  return function decorate(DecoratedComponent) {
    return class ScrollListener extends React.Component {
      constructor(props, context) {
        super(props, context);
        this._removeListener = Handler.registerScrollListener(this.context.scrollId, (scrollTop, bounding) => ({
          collect: collect(scrollTop, bounding, this.props, this),
          update: (props) => this.setState(props)
        }))
      }

      componentWillUnmount() {
        this._removeListener.remove();
      }

      static contextTypes = {
        scrollId: React.PropTypes.string
      }

      render() {
        return (
          <DecoratedComponent 
            {...this.props}
            {...this.state}
          />
        );
      }
    };
  }

    
}