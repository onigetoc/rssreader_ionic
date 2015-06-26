(function() {
/* global angular,window,cordova,console */

	angular.module('starter', ['ionic','ngCordova','rssappControllers','rssappServices'])

	.constant("settings", {
		title:"Raymond Camden's Blog",
		rss:"http://rt.com/rss/"
	})

	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('Home', {
				url: '/',
				controller: 'HomeCtrl',
				templateUrl: 'partials/home.html'
			})
			.state('Entries', {
				url: '/entries',
				controller: 'EntriesCtrl',
				templateUrl: 'partials/entries.html',
			})
			.state('Entry', {
				url: '/entry/:index',
				controller: 'EntryCtrl',
				templateUrl: 'partials/entry.html',
			})
			.state('Offline', {
				url: '/offline',
				templateUrl: 'partials/offline.html'
			});

		$urlRouterProvider.otherwise("/");

	}])

	.run(function($ionicPlatform, $rootScope, $location) {

		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if(window.StatusBar) {
				StatusBar.styleDefault();
			}

		});

		$rootScope.goHome = function() {
			$location.path('/entries');
		};

	});

}());
