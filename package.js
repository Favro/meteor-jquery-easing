Package.describe({
name: "mrt:jquery-easing",
version: "1.3.0",
summary : "GSGD's jQuery easing plugin for Meteor"
});

Package.onUse(function(api) {
api.versionsFrom('METEOR@2.3');

api.use('jquery', 'client');
api.addFiles([
	'lib/js/jquery.easing.js'
], 'client');
});

