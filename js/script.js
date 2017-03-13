function buscarPrimos() {
  'use strict';

  var worker = new Worker('js/worker.js');
  worker.postMessage(document.getElementById('formulario').input.value);

  worker.onmessage = function(event) {
    document.getElementById('result').innerHTML = event.data;
  };
  // worker.terminate();
}
