// html buttons
const nextBtn = document.getElementById("nextM");
const previousBtn = document.getElementById("previousM");
const monthText = document.getElementById("month");
const yearText = document.getElementById("year");
const currentBtn = document.getElementById("currentM");

// functions

//since every month has a diffrent length we have to clear the rest of remaining dates on html text
function clearDates() {
    needToGetCleared.forEach(element => {
        daysText = document.getElementById(element);
        daysText.innerText = '';
    });
}
function NextMonth() {
    currentMonthDate += 1;
    if (currentMonthDate == 12) {
        currentMonthDate = 0;
        currentYearName += 1;
    }
    currentMonthName = month[currentMonthDate][0];
    currentMonthDays = month[currentMonthDate][1];
    clearDates();
    for (let i = 1; i <= currentMonthDays; i++) {
        daysText = document.getElementById(i);
        daysText.innerText = i;
        if (i == currentMonthDays) {
            daysText.innerText = i + '\n';
        }
    };
    monthText.innerText = currentMonthName + "\n";
    yearText.innerText = currentYearName;
}

function PreviousMonth() {
    currentMonthDate -= 1;
    if (currentMonthDate == -1) {
        currentMonthDate = 11;
        currentYearName -= 1;
    }
    currentMonthName = month[currentMonthDate][0];
    currentMonthDays = month[currentMonthDate][1];
    clearDates();
    for (let i = 1; i <= currentMonthDays; i++) {
        daysText = document.getElementById(i);
        daysText.innerText = i;
        if (i == currentMonthDays) {
            daysText.innerText = i + '\n';
        }
    };
    monthText.innerText = currentMonthName + "\n";
    yearText.innerText = currentYearName;
}


function CurrentMonth() {
    clearDates();
    currentMonthName = month[date.getUTCMonth()][0];
    currentMonthDate = date.getUTCMonth();
    currentYearName = date.getUTCFullYear();
    monthText.innerText = currentMonthName + "\n";
    yearText.innerText = currentYearName;
    currentMonthDays = month[date.getUTCMonth()][1];
    for (let i = 1; i <= currentMonthDays; i++) {
        daysText = document.getElementById(i);
        daysText.innerText = i;
        if (i == currentMonthDays) {
            daysText.innerText = i + '\n';
        }
    };
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
days[0] = ['Sunday'];
days[1] = ['Monday'];
days[2] = ['Tuesday'];
days[3] = ['Wednesday'];
days[4] = ['Thursday'];
days[5] = ['Friday'];
days[6] = ['Saturday'];

const needToGetCleared = [29, 30, 31];

// seting defualt text in index.html
currentMonthName = month[date.getUTCMonth()][0];
currentYearName = date.getUTCFullYear();
currentMonthDays = month[date.getUTCMonth()][1];
for (let i = 1; i <= currentMonthDays; i++) {
    var daysText = document.getElementById(i);
    daysText.innerText = i;
    if (i == currentMonthDays) {
        daysText.innerText = i + '\n';
    }
};
monthText.innerText = currentMonthName + "\n";
yearText.innerText = currentYearName;
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