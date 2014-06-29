var NaviView = Backbone.View.extend({
	el: $("#nav-backbone"),
	navTemplate: _.template($('#nav-template').html()),
	events: {
		"click #nav-home": "activeHome",
		"click #nav-direction": "acitveDirection"
	}
	initialize: function() {
		this.nav = this.$("#navbar-list");
	}
	render: function() {
		this.nav.show();
		this.nav.html(this.navTemplate({curPage:home}))
	}
	activeHome: function() {

	}
})