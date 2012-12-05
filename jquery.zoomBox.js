(function($) {
  $.fn.zoombox = function() {
    this.parent().append('<div id="ibox" />');
    var b = $("#ibox"),
        g = 0,
        h = 0;
    this.each(function() {
      var c = $(this);
      c.mouseenter(function() {      	
        b.html("");
        g = c.position().left - 4;
        h = c.position().top - 4;
        var d = c.height(),
            e = c.width(),
            f;
        checkwh = d < e ? f = 40 * (e / d) / 2 : f = 40 * e / d / 2;
        $(this).clone().prependTo(b);
        b.css({
          top: h + "px",
          left: g + "px"
        });
        
        var i = $(this).attr("src").replace('/thumb',''),
            j = $(this).attr("alt");
        
        b.stop().fadeTo(200, 1, function() {
          $(this).animate({
            top: "-=20",
            left: "-=" + f
          }, 200, function() {
            $(this).parents("a.lightbox").attr("href", i);
            $(this).parents("a.lightbox").attr("title", j)
          }).children("img").animate({
            height: "+=40"
          }, 200, function() {
            $(this)
          })
        })
      });
      b.mouseleave(function() {
        b.html("").hide()
      })
    })
  }
})(jQuery);