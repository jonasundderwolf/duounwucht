var index = 0;
$(function() {
  $('.thumbs .caption').show();
  $('a.thumb').each(function(i) {$(this).attr('href', files[i]);});
  var gallery = $('#content').galleriffic('#thumbnails', {
      numThumbs:              15,
      preloadAhead:           10, // Set to -1 to preload all images
      enableTopPager:         false,
      enableBottomPager:      true,
      imageContainerSel:      '#image',
      controlsContainerSel:   '',
      captionContainerSel:    '#caption',
      renderNavControls:      true,
      prevLinkText:           'Zur&uuml;ck',
      nextLinkText:           'Weiter',
      nextPageLinkText:       'Weiter &rsaquo;',
      prevPageLinkText:       '&lsaquo; Zur&uuml;ck'
  });
});
