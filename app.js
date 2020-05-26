// html buttons
const nextBtn = document.getElementById("nextM");
const previousBtn = document.getElementById("previousM");
const monthText = document.getElementById("month");
const yearText = document.getElementById("year");
const currentBtn = document.getElementById("currentM");

// functions
function checkForLeap() {
    if (currentYearName % 4 == 0) {
        month[1] = ["February", 29];
    }
    else {
        month[1] = ["February", 28];
    }
}
//since every month has a diffrent length we have to clear the rest of remaining dates on html text
function clearDates() {
    for (let j = 1; j < 42; j++) {
        daysText = document.getElementById(j);
        daysText.innerText = '';
    }
}

function getDayInWeek(date, month, year) {
    wDay = new Date(year, month, date).getDay();
    return wDay
}

function printDaysInTable() {
    currentMonthName = month[currentMonthDate][0];
    checkForLeap()
    currentMonthDays = month[currentMonthDate][1];
    clearDates();
    getDayInWeek(1, currentMonthDate, currentYearName);
    for (let i = 1; i <= currentMonthDays; i++) {
        daysText = document.getElementById(i + wDay + 1);
        daysText.innerText = i;
        if (i == currentMonthDays) {
            daysText.innerText = i + '\n';
        }
    };
    monthText.innerText = currentMonthName + "\n";
    yearText.innerText = currentYearName;
}

function nextMonth() {
    currentMonthDate += 1;
    if (currentMonthDate == 12) {
        currentMonthDate = 0;
        currentYearName += 1;
    }
    printDaysInTable()
}

function previousMonth() {
    currentMonthDate -= 1;
    if (currentMonthDate == -1) {
        currentMonthDate = 11;
        currentYearName -= 1;
    }
    printDaysInTable()
}

function currentMonth() {
    currentMonthName = month[date.getUTCMonth()][0];
    currentMonthDate = date.getUTCMonth();
    currentYearName = date.getUTCFullYear();
    printDaysInTable()
}

// set names for months and days
var date = new Date()
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
