(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  // polyfill:
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (inCallback) {
      window.setTimeout(inCallback, 17);
    };
  }

  nx.easeout = function (inFrom, inTo, inRate, inCallback) {
    var from = inFrom || 0;
    var rate = inRate || 2;
    (function step() {
      from = from + (inTo - from) / rate;

      if (from < 1) {
        inCallback(inTo, true);
        return;
      }
      inCallback(from, false);
      window.requestAnimationFrame(step);
    }());
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.easeout;
  }

}());
