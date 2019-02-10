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
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');
  /* Generate CSS variables for red theme color */
  app.utils.colorThemeCSSProperties('#0FD991');