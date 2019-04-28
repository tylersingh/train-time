// This app will serve as a train schedule

// When adding trains, administrators will be able to enter the following:

// Train Name

// Destination

// Train Time -- in military time

// Frequency -- in minutes

// Code this app to calculate when the next train will arrive; this should be relative to the current time.




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


    database.ref().on("child_added",function (childSnapshot) {
        //callback to recieve arrival time
        var name = childSnapshot.val().name;
        var destination = childSnapshot.val().arrival;
        //callback to recieve arrival time
        var arrival = childSnapshot.val().arrival
        var frequency = childSnapshot.val().frequncy;
        var startTime = moment(arrival, "HH.mm")
        //confirm start time recieves data
        console.log(startTime)
        var endTime = new Date()

        endTime = moment(endtime, "HH:mm")
        //confirm end time recieves data
        console.log(endTime)
        console.log(endTime.diff(starTime, "minutes"))
        console.log(childSnapshot);
        //what the user will see
        //jquery to make a new table row
        var row = $("<tr>").append(
            $("<td>").text(name),
            $("<td>").text(destination),
            $("<td>").text(frequency),
            $("<td>").text(moment(arrival,"HH.mm").format("hh:mm a")),
            $("<td>").text((minutes(arrival)),
            $("#tbody").append(row),
        )
    })
});



//function for arrival time
function minutes (arrival){
    //if else statement for arrival and current time
    if (moment() < moment(arrival, "HH:mm")) {
        //Arrival time is first because it is in the future
        timeDiffInMinutes = moment(arrival, "HH:mm").diff(moment(), 'minutes');
    }
    else {
        //current time is first because it is in the future
        timeDiffInMinutes = moment().diff(moment(arrival, "HH:mm"), 'minutes');
    }

    return timeDiffInMinutes

}

}