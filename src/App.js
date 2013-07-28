define(function (require) {
	'use strict';

	var Backbone = require('backbone'),
		Marionette = require('marionette'),
		App = new Backbone.Marionette.Application(),
		regions = {
			mainRegion: '#mainRegion'
		};

	function applicationInitializer(options) {
		App.module('SampleModule', function (Mod, App, Backbone, Marionette, $, _){
			// Define a view to show
			// ---------------------

			var MainView = Marionette.ItemView.extend({
				template: '#sample-template',

				name: 'Default',

				onRender: function () {
					console.log(this.getOption('name'));
				},

				getOption: function (key) {
					return Marionette.getOption(this, key);
				}
			});

			// Define a controller to run this module
			// --------------------------------------

			var Controller = Marionette.Controller.extend({
				initialize: function (options) {
					this.region = options.region;
				},

				show: function () {
					var model = new Backbone.Model({
						contentPlacement: "Grant Caesar Peters"
					});

					var view = new MainView({
						model: model,
						name: 'Grant'
					});

					this.region.show(view);
				}
			});

			// Initialize this module when the app starts
			// ------------------------------------------
			Mod.addInitializer(function () {
				Mod.controller = new Controller({
					region: App.mainRegion
				});
				Mod.controller.show();
			});
		});
	}

	App.addRegions(regions);
	App.addInitializer(applicationInitializer);

	return App;
});