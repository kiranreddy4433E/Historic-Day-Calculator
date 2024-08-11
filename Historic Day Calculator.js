document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value.toLowerCase(); // toLowerCase to standardize the input
    var year = parseInt(document.getElementById("year").value);

    // Month code logic
    var codem;
    if (month === "january" || month === "october") {
        codem = 1;
    } else if (month === "february" || month === "march" || month === "november") {
        codem = 4;
    } else if (month === "april" || month === "july") {
        codem = 0;
    } else if (month === "may") {
        codem = 2;
    } else if (month === "june") {
        codem = 5;
    } else if (month === "august") {
        codem = 3;
    } else if (month === "september" || month === "december") {
        codem = 6;
    } else {
        alert("Enter a valid month");
        return;
    }

    // Year code logic
    var codey, decade, leap;
    if (year >= 1500 && year <= 1599) {
        codey = 0;
        decade = year - 1500;
        leap = Math.trunc(decade / 4);
    } else if (year >= 1600 && year <= 1699) {
        codey = 6;
        decade = year - 1600;
        leap = Math.trunc(decade / 4);
    } else if (year >= 1700 && year <= 1799) {
        codey = 4;
        decade = year - 1700;
        leap = Math.trunc(decade / 4);
    } else if (year >= 1800 && year <= 1899) {
        codey = 2;
        decade = year - 1800;
        leap = Math.trunc(decade / 4);
    } else if (year >= 1900 && year <= 1999) {
        codey = 0;
        decade = year - 1900;
        leap = Math.trunc(decade / 4);
    } else if (year >= 2000 && year <= 2099) {
        codey = 6;
        decade = year - 2000;
        leap = Math.trunc(decade / 4);
    } else if (year >= 2100 && year <= 2199) {
        codey = 4;
        decade = year - 2100;
        leap = Math.trunc(decade / 4);
    } else if (year >= 2200 && year <= 2299) {
        codey = 2;
        decade = year - 2200;
        leap = Math.trunc(decade / 4);
    } else if (year >= 2300 && year <= 2399) {
        codey = 0;
        decade = year - 2300;
        leap = Math.trunc(decade / 4);
    } else {
        alert("Year must be between 1500 and 2399");
        return;
    }

    // Day calculation logic
    var coded = (Math.trunc(Number(date) + codem + decade + leap + codey) % 7); // Ensure day 0 is not possible
    console.log("coded", coded)

    // Determine the day of the week
    var dayOfWeek;
    if (coded === 1) {
        dayOfWeek = "Sunday";
    } else if (coded === 2) {
        dayOfWeek = "Monday";
    } else if (coded === 3) {
        dayOfWeek = "Tuesday";
    } else if (coded === 4) {
        dayOfWeek = "Wednesday";
    } else if (coded === 5) {
        dayOfWeek = "Thursday";
    } else if (coded === 6) {
        dayOfWeek = "Friday";
    } else if (coded === 7) {
        dayOfWeek = "Saturday";
    } else {
        dayOfWeek = "Invalid day";
    }

    alert("The day is: " + dayOfWeek); // Show the result to the user
});
