var friendsData = require('../data/friends.js');
var path = require('path');

module.exports = function(app){

	app.get('/api/friends', function(req,res) {
		res.json(friendsData);
	})

app.post('/api/friends', function(req,res) {
		
		var newScores = [];

		for (var i = 0; i<req.body.scores.length; i++) {
			newScores.push(parseInt(req.body.scores[i]));	
		}


	app.post('/api/friends', function(req,res) {
		var userAnswers = [];

difference = difference + Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(userAnswers[j]))
	}
}