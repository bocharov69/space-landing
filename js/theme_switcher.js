function style_switch_to(title) {
  event.preventDefault();
  var i, a, main;
  a = document.getElementsByTagName("link");
  for (i = 0; i < a.length; i++) {
    if (a[i].getAttribute("rel").indexOf("style") != -1 && a[i].getAttribute("title")) {
      a[i].disabled = true;
      if (a[i].getAttribute("title") == title) {
        a[i].disabled = false;
      }
    }
  }
}