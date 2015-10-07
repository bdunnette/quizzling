Router.configure({
  layoutTemplate: 'MasterLayout'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});
