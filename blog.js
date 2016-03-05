(function(){

	var BlogItem = Backbone.Model.extend({

		initialize: function(){
			console.log(BlogItem.summary());
		},

		toString: function(){
			return JSON.stringify(this.toJSON());
		}

	}, {

		summary: function(){
			return "This model is used to represent a blog item.";
		}

	}),

		BlogItemView = Backbone.View.extend({

			tagName: 'div',
			className: 'blog_item',

			events: {
				'click': 'move',
				'mousedown': 'panPosition',
				'mouseup': 'reset',
				'mouseleave': 'reset'
			},

			render: function(){
				this.setDimensions();
				this.setPosition();
				this.setColor();

				return this;
			},


			setDimensions: function(){
				this.$el.css({
					width: this.model.get('width') + 'px',
					height: this.model.get('height') + 'px'
				});
			},

			setPosition: function(){
				var position = this.model.get('position');

				this.$el.css({
					left: position.x,
					top: position.y
				});
			},

			setColor: function(){
				this.$el.css('background-color', this.model.get('color'));
			},

			move: function(){
				this.$el.css('left', this.$el.position().left + 10);
			},

			reset: function(){
				this.$el.unbind('mousemove');
				console.log('unbind');
			},

			panPosition: function(event){
				//set position of element to the position of the mouse

				var self = this;

				var xOffset = event.pageX - self.$el.position().left,
					yOffset = event.pageY - self.$el.position().top;

				this.$el.mousemove(function(event){

					var xNew = event.pageX - xOffset,
						yNew = event.pageY - yOffset;

					self.$el.css({
						left: xNew,
						top: yNew
					});

					console.log('mouseX: ' + event.pageX + ' mouseY: ' + event.pageY + ' xOffset: ' + xOffset + ' yOffset: ' + yOffset + ' xNew: ' + xNew + ' yNew: ' + yNew);
				});
			}

		}),

		myBlogItem = new BlogItem({
			width: 100,
			height: 50,
			position: {
				x: 100,
				y: 100
			},
			color: 'blue'
		}),

		myView = new BlogItemView({
			model: myBlogItem
		});

		//$('div#blog-item-area').append(myView.render().el);

})();