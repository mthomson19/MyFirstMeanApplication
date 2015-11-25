// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'development' environment configuration object
module.exports = {
	db: 'mongodb://localhost/mean-development',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: '1661927620755219',
		clientSecret: '10459721ec278ba70e5ed2ee591994c0',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'onZbW6S2Thxheq5heh7YHqNS4',
		clientSecret: '1OWv7l07rrB8ClthtfiL5a32xcPs7ouAMnEc67FChdCAaj1qDI',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},
	google: {
		clientID: '37251699804-t5espvj3dtqphfs8ph56imrlnnq6kmql.apps.googleusercontent.com',
		clientSecret: 'CosE4wS9dJorvt8RQ37JVQOs',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};
