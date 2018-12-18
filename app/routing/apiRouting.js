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
        console.log(newcharacter.scores)
        console.log(Math.abs(parseInt(newcharacter.scores)))
        
        for(i=0; i<newcharacter.scores.length; i++){
            console.log(newcharacter.scores[i])
            userScore += Math.abs(parseInt(newcharacter.scores[i]))
           
        }

        console.log(userScore)
        // runs through current data array
        for (i=0;i<friendList.length; i++){
            console.log(friendList[i].scores);
            var friendlyness = 0;
            for(j=0; j<friendList[i].scores.length; j++){
                console.log(j)
                friendlyness += Math.abs(parseInt(friendList[i].scores[j]))
                console.log(friendlyness)
                
            }
            var compatability = Math.abs(parseInt(friendlyness - userScore));
            if (compatability <= yourbuddy.bestfriend){
                yourbuddy.name = friendList[i].name;
                yourbuddy.photo = friendList[i].photo;
                yourbuddy.bestfriend = compatability;
            }

        }
        console.log(yourbuddy)
        friendList.push(newcharacter);
        res.json(yourbuddy);


    })
}
