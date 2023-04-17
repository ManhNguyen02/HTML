var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}
  if (typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }
  w.terminate();
  w = undefined;

timedCount();