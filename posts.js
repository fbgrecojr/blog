(function(){

	var Post = Backbone.Model.extend({}),

		Input = Backbone.Model.extend({}),

		InputView = Backbone.View.extend({
			className: 'input',
			template: _.template($('#input-template').html()),
			events: {
				submit: 'new'
			},

			new: function(e){
				e.preventDefault();

				var title 	= this.$('input[name=title]').val(),
					content = this.$('textarea[name=content]').val();

					if(title.length > 0 && content.length> 0){
						this.$('input[name=title]').val('');
						this.$('textarea[name=content]').val('');

						var newPost = new Post({
								title: title,
								content: content,
								date: function(){
									var date = new Date();
									return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
								}
							}),
							newView = new PostView({
								model: newPost
							});

							$('div#blog-item-area').append(newView.render().el);
					}
			},

			render: function(){
				this.$el.html(this.template);

				return this;
			}

		}),

		PostView = Backbone.View.extend({
			className: 'post',
			template: _.template($('#post-template').html()),
			render: function(){
				this.$el.html(this.template(this.model.toJSON()));
				return this;
			}
		}),

		input = new Input({}),

		myInput = new InputView({
			model: input
		});

		$('div#blog-item-area').append(myInput.render().el);

})();