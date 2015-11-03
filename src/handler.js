var listeners = {};
var updateListeners = {};

var Handler = {
  registerUpdateListner: (id, cb) => {
    
    updateListeners[id] = updateListeners[id] || [];
    updateListeners[id].push(cb);

    return {
      remove: () => {
        var index = updateListeners[id].findIndex((f) => f === cb);
        updateListeners[id].splice(index, 1);
      }
    }
  },
  registerScrollListener: (id, cb) => {
    
    listeners[id] = listeners[id] || [];
    listeners[id].push(cb);

    return {
      remove: () => {
        var index = listeners[id].findIndex((f) => f === cb);
        listeners[id].splice(index, 1);
      }
    }
  },
  getUpdateListeners: (id) => updateListeners[id] || [],
  getScrollListeners: (id) => listeners[id] || []
}

module.exports = Handler;