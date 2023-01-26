
var hoursScheduler = [
    {
        id: "1",
        time: "9 AM",
        description: ""
    },
    {
        id: "2",
        time: "10 AM",
        description: ""
    },
    {
        id: "3",
        time: "11 AM",
        description: ""
    },
    {
        id: "4",
        time: "12 PM",
        description: ""
    },
    {
        id: "5",
        time: "1 PM",
        description: ""
    },
    {
        id: "6",
        time: "2 PM",
        description: ""
    },
    {
        id: "7",
        time: "3 PM",
        description: ""
    },
    {
        id: "8",
        time: "4 PM",
        description: ""
    },
    {
        id: "9",
        time: "5 PM",
        description: ""
    }
];

var cuurentHour = moment().format("h A");

// row element witch contains time, description, button
function createRowBlockAnClasses(data, style) {
    // create elements
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
    descriptionEl.attr("class", "description col-10");

    // add background color
    descriptionEl.addClass(style);
    // add name attribute
    saveBtnEl.attr("data-id", data.id);

    saveBtnEl.attr("class", "saveBtn col-1");
    saveBtnIconEl.attr("class", "fas fa-save");

    //add icon
    saveBtnEl.append(saveBtnIconEl);

    //add data to elements
    timeBlockEl.text(data.time);
    descriptionEl.append(data.description);

    // append to container block
    rowConteinerEl.append(timeBlockEl);
    rowConteinerEl.append(descriptionEl);
    rowConteinerEl.append(saveBtnEl);
    rowConteinerEl.appendTo(conteinerEl)
}

function saveAppointment(e) {
    e.preventDefault();
    $(".container").empty();
    //get cuurent object
    hoursScheduler.forEach(element => {
        if (element.id == $(this).attr("data-id")) {
            element.description = $(this).prev().val();
        }
    });
    //save modified object
    localStorage.setItem("data", JSON.stringify(hoursScheduler));

    //render elements
    renderElements(hoursScheduler);

    //show notification
    appointmentNotification();


}

function appointmentNotification() {
    //show text
    $(".container").prepend("<p class='notification'>appointment added to <b>localStorage</b></p>");

    //remove text after some time
    var timeId = setTimeout(function () {
        $(".container").find('p').remove(".notification");
        clearInterval(timeId);
    }, 1500)
}

function renderElements(localData) {
    //create list of appointment with Color-code each timeblock based on past, present, and future
    localData.forEach(element => {
        if (moment(element.time, "h A").format("h A") === cuurentHour) {
            createRowBlockAnClasses(element, "present");
        } else if (moment().isAfter(moment(element.time, "h A"))) {
            createRowBlockAnClasses(element, "past");
        } else {
            createRowBlockAnClasses(element, "future");
        }
    });
}

//Run javascript after html loaded
$(function () {

    // Display the current day at the top of the calendar when a user opens the planner.
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    //get localStorage data if localStorage data is not null we use it if not we use empty object
    var localData = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : hoursScheduler;

    //render elements
    renderElements(localData);

    // button event click
    $(".container").on("click", "button", saveAppointment);

});