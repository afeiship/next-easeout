(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.easeout = function (inFrom, inTo, inRate, inCallback) {
    if (inFrom === inTo) return;
    var rate = inRate || 2;
    var callback = inCallback || nx.noop;

    (function step() {

      inFrom = inFrom + (inTo - inFrom) / rate;
      if (Math.abs(inFrom - inTo) < 1) {
        callback(inTo, true);
        return;
      }
      callback(inFrom, false);
      global.requestAnimationFrame(step);

    }());
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.easeout;
  }

}());
