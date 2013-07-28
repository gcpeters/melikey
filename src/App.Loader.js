(function (global) {
	'use strict';

	require.config({
		waitSeconds: 20,
		paths: {
			jquery: '//code.jquery.com/jquery-2.0.3.min',
			underscore: '../lib/underscore/underscore-min',
			backbone: '../lib/backbone/backbone-min',
			marionette: '../lib/marionette/backbone.marionette.min',
			handlebars: '../lib/handlebars/handlebars.runtime',
			text: '../lib/require/text',
			domReady: '../lib/require/domReady'
		},
		shim: {
			jquery: {
				exports: 'jQuery'
			},
			underscore: {
				exports: '_'
			},
			backbone: {
				deps: ['underscore', 'jquery'],
				exports: 'Backbone'
			},
			handlebars: {
				exports: 'Handlebars'
			}
		}
	});

	require(['domReady!', './App', 'backbone', 'underscore'], function (doc, App, backbone, _) {
		try {
			var View = new backbone.Marionette.ItemView.extend({
				className: 'foo',
				template: '<h1>Hello WOrld</h1>',
				initialize: function (options) {
					_.bindAll(this);
				},
				render: function () {
					console.log('on render');
					// this.el.appendChild(this.template());
				}
			});

			App.start({});
			global.App = App;
			console.dir(View);
			// App.main.show(new View());
		} catch (error) {
			if (require && require.onError) {

				require.onError(error);
			}
		}
	});
}(window));