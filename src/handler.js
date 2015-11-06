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
        var index = listeners[id].findIndex((f) => f === cb);
        listeners[id].splice(index, 1);
      }
    }
  },
  triggerUpdate: (id) => {updateListeners[id] && updateListeners[id]()},
  getUpdateListener: (id) => updateListeners[id] || null,
  getScrollListeners: (id) => listeners[id] || []
}

module.exports = Handler;