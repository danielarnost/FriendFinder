var friendsData = require('../data/friends.js');
var path        = require('path');

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friendsData);
    })

    app.post('/api/friends', function(req, res) {
        //console.log(friendsData.length);
        var userAnswers = [];

        for (var i = 0; i < req.body.scores.length; i++) {
            userAnswers.push(parseInt(req.body.scores[i]));
        }

        var differences = 0;
        var totalDifferences = [];
        for (var j = 0; j < 5; j++) {
            for (var i = 0; i < 10; i++) {

                differences = differences + Math.abs(parseInt(friendsData[j].scores[i]) - parseInt(userAnswers[i]));

            }

            totalDifferences.push(differences);
            console.log(totalDifferences);
            differences = 0;
        }

        var lowest = 0;
        for (var i = 0; i < totalDifferences.length; i++) {
            if (totalDifferences[i] < totalDifferences[lowest]) {
                lowest = i;
            }

        }

        res.json(friendsData[lowest]);

    });
}
