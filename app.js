'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Health Me';

exports.handler = function(event, context, callback) {
	var alexa = Alexa.handler(event, context);
	alexa.APP_ID = APP_ID;
	alexa.registerHandlers(handlers);
	alexa.execute();
};

var handlers = {
	'LaunchRequest': function () {
		this.emit('GetFact');
	},
	'GetHelpIntent': function () {
		this.emit('GetFact');
	},
	'DefaultIntent': function () {
		this.emit('GetFact');
	},
	'GetFact': function () {
		var response = this.event.request.intent.slots.info.value;
		this.emit(':tell', response)	
	},
	'AMAZON.HelpIntent': function () {
		var speechOutput = "You can say tell me a health related question, or, you can say exit... What can I help you with?";
		var reprompt = "What can I help you with?";
		this.emit(':ask', speechOutput, reprompt);
	},
	'AMAZON.CancelIntent': function () {
		this.emit(':tell', 'Goodbye!');
	},
	'AMAZON.StopIntent': function () {
		this.emit(':tell', 'Goodbye!');
	}
};
