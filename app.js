// html buttons
const nextBtn = document.getElementById("nextM");
const previousBtn = document.getElementById("previousM");
const yearAndMonthtext = document.getElementById("yearAndMonth");
const currentBtn = document.getElementById("currentM");

// functions
function checkForLeap() {
    if (currentYearName % 4 == 0) {
        month[1] = ["February", 29];
        console.log('1');
    }
    else {
        month[1] = ["February", 28];
        console.log('2');
    }
}

//since every month has a diffrent length we have to clear the rest of remaining dates on html text
function clearDates() {
    for (let j = 1; j < 42; j++) {
        daysText = document.getElementById(j);
        daysText.innerText = '';
        daysText.className = '';
    }
}

function getDayInWeek(date, month, year) {
    wDay = new Date(year, month, date).getDay();
    return wDay + 1;
}

// Next Month Function
function nextMonth() {
    currentMonthDate += 1;
    if (currentMonthDate == 12) {
        currentMonthDate = 0;
        currentYearName += 1;
        checkForLeap();
    }
    showMonth();
}

// Previous Month Function
function previousMonth() {
    currentMonthDate -= 1;
    if (currentMonthDate == -1) {
        currentMonthDate = 11;
        currentYearName -= 1;
        checkForLeap();
    }
    showMonth();
}

// Current Month Function
function currentMonth() {
    currentMonthName = month[date.getUTCMonth()][0];
    currentMonthDate = date.getUTCMonth();
    currentYearName = date.getUTCFullYear();
    showMonth(date.getUTCDate());
}

// InterFace functions
function showMonth(day=1) {
    yearAndMonthtext.innerText = currentYearName + "  /  " + month[currentMonthDate][0];
    clearDates();
    var dayamount = month[currentMonthDate][1];
    startday = getDayInWeek(1, currentMonthDate, currentYearName);
    if (startday == 7) {
        startday -= 7;
    }
    for (let t = 1; t <= dayamount; t++) {
        daybtn = document.getElementById(t + startday);
        daybtn.innerText = t;
        daybtn.className = "day";
    }
    document.getElementById(day + startday).className = "selected";
    var prevmonth;
    var nextMonth;
    if(currentMonthDate == 0){
        prevmonth = month[11][0];
    }
    else{
        prevmonth = month[currentMonthDate - 1][0];
    }
    if(currentMonthDate == 11){
        nextMonth = month[0][0];
    }
    else{
        nextMonth = month[currentMonthDate + 1][0];
    }
    document.getElementById("previousM").innerText = prevmonth;
    document.getElementById("nextM").innerText = nextMonth;
}

// set names for months and days
const date = new Date();
const month = new Array(12);
currentMonthDate = date.getUTCMonth();
month[0] = ["January", 31];
month[1] = ["February", 28];
month[2] = ["March", 31];
month[3] = ["April", 30];
month[4] = ["May", 31];
month[5] = ["June", 30];
month[6] = ["July", 31];
month[7] = ["August", 31];
month[8] = ["September", 30];
month[9] = ["October", 31];
month[10] = ["November", 30];
month[11] = ["December", 31];

const days = Array(7);
days[0] = ['Sunday', 'Sun'];
days[1] = ['Monday', 'Mon'];
days[2] = ['Tuesday', 'Tue'];
days[3] = ['Wednesday', 'Wed'];
days[4] = ['Thursday', 'Thu'];
days[5] = ['Friday', 'Fri'];
days[6] = ['Saturday', 'Sat'];

// seting defualt text in index.html
currentMonth();

// if clicked do something ... 
if (currentBtn) {
    currentBtn.addEventListener("click", currentMonth);
}

if (nextBtn) {
    nextBtn.addEventListener("click", nextMonth);
}

if (previousBtn) {
    previousBtn.addEventListener("click", previousMonth);
}
