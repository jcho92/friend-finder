var friendList = require('../data/friends.js');


module.exports = function(app){
    app.get('/api/friends', function (req, res) {
        res.json(friendList);
    });

    app.post('/api/friends', function (req, res) {
        var newcharacter = req.body;
        var yourbuddy = 
        {
            name:"",
            photo:"",
            bestfriend:50
        }
        //user score data
        var userScore = 0
        
        //runs through the array of scores of the new character
        for(i=0; i<newcharacter.scores.length; i++){
           
            userScore += Math.abs(parseInt(newcharacter.scores[i]))
           
        }

        console.log(userScore)
        // runs through current data array
        for (i=0;i<friendList.length; i++){
          
            var friendlyness = 0;
            for(j=0; j<friendList[i].scores.length; j++){
                friendlyness += Math.abs(parseInt(friendList[i].scores[j]))
            }
            var compatability = Math.abs(parseInt(friendlyness - userScore));
            if (compatability <= yourbuddy.bestfriend){
                yourbuddy.name = friendList[i].name;
                yourbuddy.photo = friendList[i].photo;
                yourbuddy.bestfriend = compatability;
            }

        }
        
        friendList.push(newcharacter);
        res.json(yourbuddy);


    })
}
