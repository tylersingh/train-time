//Initializing Firebase
var config = {
    apiKey: "AIzaSyB7XFmtQyePBq6Iq6p6anD8kuS2lmmYx5w",
    authDomain: "train-time-a460d.firebaseapp.com",
    databaseURL: "https://train-time-a460d.firebaseio.com",
    projectId: "train-time-a460d",
    storageBucket: "train-time-a460d.appspot.com",
    messagingSenderId: "633451028753"
  };
firebase.initializeApp(config);

var database = firebase.database();
  console.log(database)

$(document).ready(function() {

    //user adding train on click
    $("add-train").on("click", function (event) {
        //user inputs
        event.preventDefault();
        var train = $("#train-name").val().trim();
        var destination = $("#train-destination").val().trim();
        var frequency = $("#train-frequency").val().trim();

        //sending user inputs to database
        database.ref().push({
            name: train,
            destination: destination,
            arrival: time,
            frequency: frequency
        });
        //clearing input value
        $("#train-name").val("")
        $("#train-destination").val("")
        $("#train-time").val("")
        $("#train-frequency").val("")
});

database.ref().on("child_added", function (childSnapshot) {
    var name = childSnapshot.val().name;
    var destination = childSnapshot.val().arrival;
    var arrival = childSnapshot.val().arrival
}


}