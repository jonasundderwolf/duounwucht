$(function() {
  if ($.browser.msie && $.browser.version*1 < 7) {
    $('.menu li').hover( 
      function() {
        var $this = $(this);
        if ($this.hasClass('parent')) {
          $this.addClass("sfhover");
        }
      },
      function() {$(this).removeClass("sfhover")} 
    );
  }
  $('a[href^=http://www.youtube.com/watch?v=]').each(function() {
    var $this = $(this);
    var code = $this.attr('href').replace('http://www.youtube.com/watch?v=', '');
    $this.replaceWith('<object width="425" height="344"><param name="movie" value="http://www.youtube.com/v/'+code+'&hl=de&fs=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/'+code+'&hl=de&fs=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344"></embed></object>');
  });
});
