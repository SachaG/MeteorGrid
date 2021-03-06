Template.comment_edit.events = {
  'click input[type=submit]': function(e){
    e.preventDefault();
    if(!Meteor.user()) throw 'You must be logged in.';

    var selected_comment_id=Session.get("selected_comment_id");
    var selected_post_id=Comments.findOne(selected_comment_id).post;
    var body = $('#body').val();

    var comment_id = Comments.update(selected_comment_id,
 		{
	   		$set: {
		      body: body
	    	}
    	}
    );
    Router.navigate("posts/"+selected_post_id, {trigger:true});
  }
};

Template.comment_edit.comment = function(){
  var comment = Comments.findOne(Session.get('selected_comment_id'));
  return comment;
};
