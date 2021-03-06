Template.nav.events = {
    'click .site-nav a': function(event){
      event.preventDefault();
      Session.set('state', 'list');
  }

  , 'click #logout': function(event){
      event.preventDefault();
      Meteor.logout();
  }

  , 'click #signup': function(event){
      event.preventDefault();
      // Session.set('previous_state', Session.get('state'));
      // Session.set('state', 'signup');
      Router.navigate('signup', {trigger: true});
  }

  , 'click #signin': function(event){
      event.preventDefault();
      // Session.set('previous_state', Session.get('state'));
      // Session.set('state', 'signin');
      Router.navigate('signin', {trigger: true});
  }

  , 'click #submit': function(event){
      event.preventDefault();
      // Session.set('previous_state', Session.get('state'));
      // Session.set('state', 'submit');
      Router.navigate('submit', {trigger: true});
  }
};

Template.nav.logged_in = function(){
  return Meteor.user() !== null;
};

Template.nav.rendered = function(){
};