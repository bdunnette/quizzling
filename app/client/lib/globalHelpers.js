Template.registerHelper('siteName', function() {
  if (Meteor.settings.public.site && Meteor.settings.public.site.name) {
    return Meteor.settings.public.site.name;
  } else {
    return 'quizling';
  }
});
