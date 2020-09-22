Package.describe({
name: "mrt:jquery-easing",
version: "1.3.0",
summary : "GSGD's jQuery easing plugin for Meteor"
});

Package.on_use(function(api) {
api.versionsFrom('METEOR@1.10.2');

api.use('jquery', 'client');
api.add_files([
	'lib/js/jquery.easing.js'
], 'client');
});

