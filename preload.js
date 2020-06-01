// Do not inject into iFrames
if(window !== window.top) {
  return;
}

const walkmeUrl = 'https://cdn.walkme.com/users/9dc2cc7215184283a01fb453b44d2883/test/walkme_9dc2cc7215184283a01fb453b44d2883_https.js';

window.addEventListener('DOMContentLoaded', function() {
  console.log('Injecting Walkme Script Tag');

  var walkme = document.createElement('script');
  walkme.type = 'text/javascript';
  walkme.async = true;
  walkme.src = walkmeUrl;
  document.head.prepend(walkme);
  window._walkmeConfig = { smartLoad:true }; 
});