// html buttons
const nextBtn = document.getElementById("nextM");
const previousBtn = document.getElementById("previousM");
const monthText = document.getElementById("monthName");
const currentBtn = document.getElementById("currentM");

// functions to switch between months
function NextMonth() {
    currentMonthDate += 1;
    if (currentMonthDate == -1) {
        currentMonthDate = 11;
    }
    if (currentMonthDate == 12) {
        currentMonthDate = 0;
    }
    currentMonthName = month[currentMonthDate];
    monthText.innerText = currentMonthName + "\n";
}

function PreviousMonth() {
    currentMonthDate -= 1;
    if (currentMonthDate == -1) {
        currentMonthDate = 11;
    }
    if (currentMonthDate == 12) {
        currentMonthDate = 0;
    }
    currentMonthName = month[currentMonthDate];
    monthText.innerText = currentMonthName + "\n";
}


function CurrentMonth() {
    var currentMonthName = month[date.getUTCMonth()];
    monthText.innerText = currentMonthName + "\n"
}

// set names for months
var date = new Date()
var month = new Array(12);
currentMonthDate = date.getUTCMonth();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

// if clicked do something ... 
if (currentBtn) {
    currentBtn.addEventListener("click", CurrentMonth);
}

if (nextBtn) {
    nextBtn.addEventListener("click", NextMonth);
}

if (previousBtn) {
    previousBtn.addEventListener("click", PreviousMonth);
}