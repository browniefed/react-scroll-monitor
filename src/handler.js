var findIndex = require('lodash/array/findIndex');
var isArray = require('lodash/lang/isArray');
var pullAt = require('lodash/array/pullAt');

var listeners = {};
var updateListeners = {};


var Handler = {
  registerUpdateListener: (id, cb) => {
    updateListeners[id] = cb;
    return {
      remove: () => {
        delete updateListeners[id]
      }
    }
  },
  registerScrollListener: (id, cb) => {
    
    listeners[id] = listeners[id] || [];
    listeners[id].push(cb);

    return {
      remove: () => {

        if (!isArray(listeners[id])) return;
        pullAt(listeners[id], findIndex(listeners[id], (f) => f === cb));
      }
    }
  },
  triggerUpdate: (id) => {updateListeners[id] && updateListeners[id]()},
  getUpdateListener: (id) => updateListeners[id] || null,
  getScrollListeners: (id) => listeners[id] || []
}

module.exports = Handler;