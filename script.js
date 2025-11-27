var c = document.getElementById('canv');
var $ = c.getContext('2d');

var col = function(x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1,1);
}

var R = function(x, y, t) {
  return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
}

var G = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
}

var B = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}

var t = 0;

var run = function() {
  for(x=0;x<=35;x++) {
    for(y=0;y<=35;y++) {
      col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
    }
  }
  t = t + 0.120;
  window.requestAnimationFrame(run);
}

run();

// Add clipboard functionality for the Copy button
document.addEventListener('DOMContentLoaded', function() {
  const grabButton = document.getElementById('grabButton');
  const card = document.querySelector('.card');
  
  // Show the card with fade-in animation after 1 second
  setTimeout(function() {
    card.classList.add('show');
  }, 1000);
  
  grabButton.addEventListener('click', function() {
    // Copy "SHNTEAM" to clipboard
    navigator.clipboard.writeText('SHNTEAM').then(function() {
      console.log('Password copied to clipboard: SHNTEAM');
      
      // Change button text to indicate success
      grabButton.innerHTML = '<span>Copied!</span>';
      
      // Revert button text after 2 seconds
      setTimeout(function() {
        grabButton.innerHTML = '<span>Copy</span>';
      }, 2000);
    }).catch(function(error) {
      console.error('Failed to copy to clipboard: ', error);
    });
  });
});