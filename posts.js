(function(){

	var Post = Backbone.Model.extend({}),

		Input = Backbone.Model.extend({}),

		InputView = Backbone.View.extend({

			tag: 'div',

			className: 'input',

			template: _.template('<form>' + 
				'<input class=content name=title id=title placeholder=Title type=text autocomplete=off autofocus/> &nbsp;' + 
				' <textarea name=content placeholder=Content rows=5 class=content type=text autocomplete=off/></form>'),

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

			tag: 'div',

			className: 'post',

			template: _.template('<div class=wrapper><div class=post-title><%= title %></div><div class=date><%= date() %></div></div><div class=post-content><%= content %></div>'),

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