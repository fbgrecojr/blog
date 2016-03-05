(function(){

	var Header = Backbone.Model.extend({}),

		HeaderView = Backbone.View.extend({

			tag: 'div',

			className: 'input',

			initialize: function(){
				this.model.on('change', function(){
					this.render();
				}, this);
			},

			template: _.template('<h1><%= content %></h1>'),

			render: function(){

				this.$el.html(this.template(this.model.toJSON()));

				return this;
			}

		}),

		header = new Header({
			content: 'T',

			title: "he Personal Blog of Frank B Greco Jr".split('')
		}),

		myHeader = new HeaderView({
			
			model: header,

			tag: 'div',

			className: 'title',

			events: {
				'click': 'replay'
			},

			replay: function(){
				//replay name
			}
		});

		$('header').append(myHeader.render().el);

		var i=0;

		function printName(){
			setTimeout(function(){
				var title 	= header.get('title'),
					content	= header.get('content');

				header.set('content', content + title[i]);
				if(++i < title.length){
					printName();
				}
			}, 75);
		}

		printName();

})();