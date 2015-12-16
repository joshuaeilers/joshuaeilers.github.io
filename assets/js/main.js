$(document).ready(function() {

  new app.modules.typer({
    msg: '> Hello, thanks for visiting my home page.',
    $el: $('.typer'),
    cursor: '|',
    speed: {
      cursor: 2,
      letters: 7,
      randomness: 0.2
    }
  }).start();

});