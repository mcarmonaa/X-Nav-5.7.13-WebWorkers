self.onmessage = function(event) {
  'use strict';

  var num = parseInt(event.data);
  var n = 1;
  var primelist = '';
  search: while (n < num) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i === 0)
        continue search;
    // found a prime!
    primelist += ' ' + n;
  }
  self.postMessage(primelist);
};
