app.modules.typer = function(opts) {
  var msg = opts.msg;
  var cursorChar = opts.cursor;
  var $el = opts.$el;
  var $cursor = opts.$el.find('.cursor');
  var $text = opts.$el.find('.text');
  var cursorDelay = 1000 / opts.speed.cursor;
  var delay = 1000 / opts.speed.letters;
  var delta = delay * (opts.speed.randomness || 0);
  var minDelay = delay - delta;
  var maxDelay = delay + delta;
  var scale = maxDelay - minDelay + 1;

  function displayChar(i) {
    if (i >= msg.length) {
      blinkCursor();
      return;
    }
    $text.text($text.text() + msg.charAt(i));
    setTimeout(function() {
      displayChar(i + 1);
    }, rand());
  }

  function rand() {
    return Math.floor(Math.random() * scale) + minDelay;
  }

  function blinkCursor() {
    $cursor.toggle();
    setTimeout(blinkCursor, cursorDelay);
  }

  this.start = function() {
  	$cursor.text(cursorChar);
    displayChar(0);
  };
}
