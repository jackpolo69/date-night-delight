var friends = require("../data/friends")
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })
    app.post("/api/friends", function (req, res) {
        var newUser = req.body
        var difference;
        var bestMatch = {
            name: "",
            img: "",
            totalDif: 999
        }
        // loops through each friend
        for (var i = 0; i < friends.length; i++) {
            difference=0
            // loops through current friend's scores
            for (var j = 0; j < friends[i].scores; j++) {
                difference += Math.abs(parseInt(newUser.scores[j]) - parseInt(friends[i].scores[j]))
            }
            if(difference<= bestMatch.totalDif){
                bestMatch.name=friends[i].name
                bestMatch.img=friends[i].img
                bestMatch.totalDif=difference
            }
        }
        friends.push(newUser)
        res.json(bestMatch)
        console.log (bestMatch)
    })
}
