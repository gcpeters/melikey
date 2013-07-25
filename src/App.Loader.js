//
(function (global) {
	'use strict';

	require.config({
		waitSeconds: 20,
		paths: {
			jquery: '//ajax.googleapis.com/ajax/lib/jquery/2.0.0/jquery.min',
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

	require(['domReady!', './App'], function (doc, App) {
		try {
			global.App = App;
			global.App.start(ENVIRONMENT);
		} catch (error) {
			if (require && require.onError) {

				require.onError(error);
			}
		}
	});
}(window));