module.exports = function (bodyParser, app, friends) {
  // var newUser = user;
  var path = require("path");
  var friends = friends;

  app.post("/api/new", function(req, res) {

    var newProfile = req.body;

    let resultArr = [];
    friends.forEach((eachFriend) => {
      resultArr.push(eachFriend.survey.reduce((sum, value, index) => {
        return sum + Math.abs(newProfile.survey[index] - value);
      },0));
    });

   let min = Math.min(...resultArr);
    let pos = resultArr.indexOf(min);
    

// /**********************
// MATCHING ALGORITHM
// **********************/

//     var difHolder = [];

//     for (var i=0;i<friends.length;i++) {
//       difHolder[i] = []; 
//       var allDifs = [];
//         for (var j=0;j<friends[i].survey.length;j++) {
//             var comp = friends[i].survey[j];
//             var dif = comp - newProfile.survey[j];
//             dif=Math.abs(dif);
//             allDifs.push(dif);
//         }
//         difHolder[i].push(allDifs);
//     }

//     difHolder = difHolder.slice(0,newProfile.survey.length);
//     var sumHolder = [];

//     for (i=0;i<difHolder.length;i++) {
//         var total = 0;
//         for (j=0;j<difHolder[i][0].length;j++) {
//             total += difHolder[i][0][j];
//         }
//         sumHolder.push(total);
//     }

//     var min = Math.min.apply(Math, sumHolder);
//     console.log("Min: " + min);
//     var friendIdx = sumHolder.indexOf(min);
//     console.log(friends[friendIdx].name);

/**********************
END MATCHING ALGORITHM
**********************/
    friends.push(newProfile);
  	res.send(friends[pos]);
  }); // END APP.POST

  app.get("/api/friends", function (req, res) {
    // res.sendFile(path.join(__dirname, "../data/friends.js"));
    res.json(friends);
  }); // END GET FOR FRIENDS.JS

} // END MODULE EXPORTS