
var hours = [
    {
        id: 1,
        time: "9 AM",
        comment: ""
    },
    {
        id: 2,
        time: "10 AM",
        comment: ""
    },
    {
        id: 3,
        time: "11 AM",
        comment: ""
    },
    {
        id: 4,
        time: "12 PM",
        comment: ""
    },
    {
        id: 5,
        time: "1 PM",
        comment: ""
    },
    {
        id: 6,
        time: "2 PM",
        comment: ""
    },
    {
        id: 7,
        time: "3 PM",
        comment: ""
    },
    {
        id: 8,
        time: "4 PM",
        comment: ""
    },
    {
        id: 9,
        time: "5 PM",
        comment: ""
    }
]

//Run javascript after html loaded
$(function(){
    //Display the current day at the top of the calendar when a user opens the planner.
    $("#currentDay").text(moment().format("dddd, MMMM Do"));





})