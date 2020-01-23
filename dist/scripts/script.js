// Web Dev Starter Pack
// Simple, Scalable, and Maintainable Architecture.
//
// Author:   Jack Ryan Oracoy
// Company:  OSP Cebu Corporation
// Email:    jack.oracoy@osp-cebu.com.ph


// IE support for "main"
document.createElement('main');

// Add target="_blank" rel="noreferrer noopener"
window.onload = function(){
  var anchors = document.getElementsByTagName('a');
  for (var i=0; i<anchors.length; i++){
    if (anchors[i].hostname != window.location.hostname) {
      anchors[i].setAttribute('target', '_blank'), ('rel', 'noreferrer noopener');
    }
  }
}

// Detect if user is using TAB to navigate
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('tab-used');
    window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);
