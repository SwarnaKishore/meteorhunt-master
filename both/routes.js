Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'index'
});


Router.route('/recent', {
  name: 'recent'
});

Router.route('/trending', {
  name: 'trending'
});


Router.route('/products/:_id', {
  name: 'products.show'
});

Router.route('/users/:_id', {
  name: 'users.show'
});

Router.route('/notifications', {
  name: 'notifications'
});

Router.route('/profile', {
  name: 'profile'
});
