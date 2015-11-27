$( document ).ready( function () {

  $( window ).scroll( function () {
    drawLine( $( '#route' ), document.getElementById( 'path' ) );
  });

  // init the line length
  drawLine( $( '#route' ), document.getElementById( 'path' ) );

  //draw the line
  var line = document.getElementById( 'path' ),
      pathLength = line.getTotalLength(),
      maxScrollTop = $( document ).height() - $( window ).height();

  function drawLine  ( container, line ) {

    var percentDone = $( window ).scrollTop() / maxScrollTop,
    length = percentDone * pathLength;

    line.style.strokeDasharray = [ length, pathLength].join(' ');
  }

});
