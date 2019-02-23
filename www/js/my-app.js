var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
    closeByBackdropClick: true,
  },
    // Add default routes
    routes: [
      {
        path: '/rsvp/',
        url: 'registration.html',
      },
      {
        path: '/food/',
        url: 'foodlist.html',
      },
      {
        path: '/',
        url: 'index.html',
      },
      {
        path: '/submit/',
        url: 'success.html',
      },
      {
        path: '/peter/',
        url: 'committee1.html',
      },
      {
        path: '/phum/',
        url: 'committee2.html',
      },
      {
        path: '/jake/',
        url: 'committee3.html',
      },
      {
        path: '/kara/',
        url: 'committee4.html',
      },
      {
        path: '/amy/',
        url: 'committee5.html',
      },
      {
        path: '/devs/',
        url: 'devs.html',
      },
    ],
    // ... other parameters
});

var mainView = app.views.create('.view-main');
/* Generate CSS variables for red theme color */
app.utils.colorThemeCSSProperties('#0FD991');

// INDEX JS

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
  if(app.views.main.router.currentRoute["route"]["path"] != "/"){
    app.views.main.router.navigate('/', true);
  }
  app.panel.close(true);

  // target element id
  var id = $(this).attr('href');
  
  // target element
  var $id = $(id);
  if ($id.length === 0) {
      return;
  }
  
  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();
  
  // top position relative to the document
  var pos = $id.offset();
  
  console.log(pos);
  // animated top scrolling
  $('.page-content').wait(400).animate({scrollTop: pos["top"]});
});