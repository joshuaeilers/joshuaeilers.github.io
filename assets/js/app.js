$(document).ready(function() {

  function Console(opts) {
    var msg = opts.msg;
    var $el = opts.$el;
    var len = msg.length;
    var $cursor = $el.find('.cursor');
    var $text = $el.find('.text');
    var chars = '';

    function displayChar(i) {
      if (i >= len) {
        blinkCursor();
        return;
      }

      chars += msg.charAt(i);
      $text.text(chars);

      setTimeout(function() {
        displayChar(i + 1);
      }, rand(75, 201));
    }

    function rand(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function blinkCursor() {
      $cursor.toggle();
      setTimeout(blinkCursor, 500);
    }

    this.start = function() {
      displayChar(0);
    };
  }

  new Console({
    msg: 'Hello, welcome to the home page of Joshua Eilers.',
    $el: $('.console')
  }).start();

});