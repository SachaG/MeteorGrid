Meteor.subscribe('users');

Posts = new Meteor.Collection('posts');
Meteor.subscribe('posts');

Comments = new Meteor.Collection('comments');
Meteor.subscribe('comments');

MyVotes = new Meteor.Collection('myvotes');
Meteor.subscribe('myvotes');

Settings = new Meteor.Collection('settings');
Meteor.subscribe('settings');

Session.set('state', 'list');

if (Meteor.is_client) {
	SimpleRouter = FilteredRouter.extend({
		initialize: function() {
			FilteredRouter.prototype.initialize.call(this);
			this.filter(this.require_login, {only: ['submit']});
		},
		require_login: function(page) {
			console.log(Meteor.user());
		  if (Meteor.user()) {
		    return page;
		  } else {
		    return 'signin';
		  }
		},
		routes: {
		  '': 'top',
		  'test':'test',
		  'signin':'signin',
		  'signup':'signup',
		  'submit':'submit',
		  'posts/:id':'post',
		  'posts/:id/edit':'post_edit',
		  'comments/:id':'comment',
		  'comments/:id/edit':'comment_edit',
		  'settings':'settings'
		},
		top: function() { console.log("top"); this.goto('top'); },
		test: function() {console.log("test");  this.goto('test'); },		
		signup: function() {console.log("signup");  this.goto('signup'); },
		signin: function() {console.log("signin");  this.goto('signin'); },
		submit: function() {console.log("submit");  this.goto('post_submit'); },
		settings: function() {console.log("settings");  this.goto('settings'); },
		post: function(id) {
			console.log("post, id="+id); 
			Session.set('selected_post_id', id); 
			this.goto('post_page'); 
		},
		post_edit: function(id) {
			console.log("post_edit, id="+id); 
			Session.set('selected_post_id', id); 
			this.goto('post_edit'); 
		},
		comment: function(id) {
			console.log("comment, id="+id); 
			Session.set('selected_comment_id', id);
			this.goto('comment_page'); 
		},
		comment_edit: function(id) {
			console.log("comment_edit, id="+id); 
			Session.set('selected_comment_id', id);
			this.goto('comment_edit'); 
		}	
	});
  
	var Router = new SimpleRouter();
	Meteor.startup(function() {
		Backbone.history.start({pushState: true});
	});
}
  // Template.sign_in.events = {
  //   'submit form': function(e) {
  //     e.preventDefault();
  //     Session.set('username', $(event.target).find('[name=username]').val())
  //   }
  // }
  
  // Template.home.events = {
  //   'click .welcome': function(e) {
  //     e.preventDefault();
  //     Router.navigate('welcome', {trigger: true});
  //   }
  // }
  
  // Template.welcome.username = function() { return Session.get('username'); }
  // Template.welcome.events = {
  //   'click .logout': function(e) {
  //     e.preventDefault();
  //     Session.set('username', false);
  //   },
  //   'click .home': function(e) { 
  //     e.preventDefault();
  //     Router.navigate('', {trigger: true});
  //   }
  // }





// if (Meteor.is_client) {
//     Meteor.startup(function () {
//         $(document).ready(function (){
//         	console.log($('#mobile-menu'));
// 	      $('#mobile-menu').pageslide({
// 		    iframe: false
// 		  });
		  
// 		  if($(window).width()>400){ //do not load social media plugin on mobile
// 		  	console.log($('.share-replace'));
// 		    $('.share-replace').sharrre({
// 		      share: {
// 		        googlePlus: true,
// 		        facebook: true,
// 		        twitter: true,
// 		      },
// 		      buttons: {
// 		        googlePlus: {size: 'tall'},
// 		        facebook: {layout: 'box_count'},
// 		        twitter: {count: 'vertical'},
// 		      },
// 		      enableHover: false,
// 		      enableCounter: false,
// 		      enableTracking: true
// 		    });
// 		  }
//         });
//     });
// }
