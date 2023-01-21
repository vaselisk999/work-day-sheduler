
var hoursScheduler = [
    {
        id: 1,
        time: "9 AM",
        description: ""
    },
    {
        id: 2,
        time: "10 AM",
        description: ""
    },
    {
        id: 3,
        time: "11 AM",
        description: ""
    },
    {
        id: 4,
        time: "12 PM",
        description: ""
    },
    {
        id: 5,
        time: "1 PM",
        description: ""
    },
    {
        id: 6,
        time: "2 PM",
        description: ""
    },
    {
        id: 7,
        time: "3 PM",
        description: ""
    },
    {
        id: 8,
        time: "4 PM",
        description: ""
    },
    {
        id: 9,
        time: "5 PM",
        description: ""
    }
];

var cuurentHour = moment().format("h A");

// row element witch contains time, description, button
function createRowBlockAnClasses(data, style) {
    var conteinerEl = $('.container');
    var rowConteinerEl = $('<div>');
    var timeBlockEl = $('<div>');
    var descriptionEl = $('<textarea>');
    var saveBtnEl = $('<button>');
    var saveBtnIconEl = $('<i>');

    // initial classes
    rowConteinerEl.attr("class", "row");
    timeBlockEl.attr("class", "time-block col-1");
    descriptionEl.attr("class", "description col-10");

    
    //disable past hours
    descriptionEl.attr("disabled", true);
    saveBtnEl.attr("disabled", true);

    if("future" === style){
        descriptionEl.attr("disabled", false);
        saveBtnEl.attr("disabled", false);
    }

    descriptionEl.attr("class", "description col-10");

    // add background color
    descriptionEl.addClass(style);

    saveBtnEl.attr("class", "saveBtn col-1");
    saveBtnIconEl.attr("class", "fas fa-save");

    saveBtnEl.append(saveBtnIconEl);
    timeBlockEl.text(data.time);
    rowConteinerEl.append(timeBlockEl);
    rowConteinerEl.append(descriptionEl);
    rowConteinerEl.append(saveBtnEl);
    rowConteinerEl.appendTo(conteinerEl)
}

function saveAppointment(){
    
}

function appointmentNotification(){

}

//Run javascript after html loaded
$(function () {
    //Display the current day at the top of the calendar when a user opens the planner.
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    //create list of appointment
    for (let index = 0; index < hoursScheduler.length; index++) {
        const element = hoursScheduler[index];
        if (moment(element.time, "h A").format("h A") === cuurentHour) {
            createRowBlockAnClasses(element, "present");
        } else if (moment().isAfter(moment(element.time, "h A"))) {
            createRowBlockAnClasses(element, "past");
        } else {
            createRowBlockAnClasses(element, "future");
        }
    }

    $()
})