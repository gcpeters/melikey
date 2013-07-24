define(function (require) {
	'use strict';

	var App = new Backbone.Marionette.Application(),
		regions = {
			main: '#mainRegion'
		};

	function applicationInitializer(options) {
		console.log('Init', options);
		console.trace();
	}

	App.addRegions(regions);
	App.addInitializer(applicationInitializer);

	return App;
});