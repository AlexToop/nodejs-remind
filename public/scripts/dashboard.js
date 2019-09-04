// $(function () {
//     $("#datepicker").datepicker()
// })



$(function () {
    $('#datecontainer .input-group.date').datepicker({
        format: "dd/mm/yyyy",
        weekStart: 1,
        todayBtn: true,
        todayHighlight: true
    });
    $('#anniversary').innerText = "date"
});

$(function (){
    const anniversaryElement = document.getElementById("anniversary")
    const anniversaryDate = moment("16/05/2011", "DD-MM-YYYY")
    const today = moment()
    const diff = difference(today, anniversaryDate);

    anniversaryElement.innerHTML = diff.years + " years, " + diff.months + " months and " + diff.days + " days."
});

$(function (){
    const laptopElement = document.getElementById("laptop")
    const laptopDate = moment("07/05/2015", "DD-MM-YYYY")
    const today = moment()
    const diff = difference(today, laptopDate);

    laptopElement.innerHTML = diff.years + " years, " + diff.months + " months and " + diff.days + " days."
});

$(function (){
    const mobileElement = document.getElementById("mobile")
    const mobileDate = moment("14/08/2017", "DD-MM-YYYY")
    const today = moment()
    const diff = difference(today, mobileDate);

    mobileElement.innerHTML = diff.years + " years, " + diff.months + " months and " + diff.days + " days."
});

function getDifference(){
    moment().format();
    $('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' });
    
    const today = moment();
    const givenDate = moment( $('#datecontainer .input-group.date').datepicker("getDate"));
    const resultArea = document.getElementById("resultArea")
    const diff = difference(givenDate, today);

    resultArea.innerHTML = diff.years + " years, " + diff.months + " months and " + diff.days + " days."
}

function difference(d1, d2) {
    var m = moment(d1);
    var years = m.diff(d2, 'years');
    m.add(-years, 'years');
    var months = m.diff(d2, 'months');
    m.add(-months, 'months');
    var days = m.diff(d2, 'days');
  
    return {years: years, months: months, days: days};
  }


function calculateDays() {
    var today = new Date();
    var contentToWrite = ""
    var givenDate
    var resultArea = document.getElementById("resultArea")

    try {
        givenDate = $("#datepicker").datepicker('getDate')
        if (givenDate) {
            contentToWrite = today - givenDate
            var daysTotal = Math.floor(contentToWrite / (1000 * 60 * 60 * 24))
            if (contentToWrite < 0) {
                contentToWrite = contentToWrite * -1
                contentToWrite += " days in the future."
            } else {
                contentToWrite += " days ago."
            }
        } else {
            contentToWrite = "Please select a date"
        }
    } catch (error) {
        contentToWrite = "Please select a date"
    }
    resultArea.innerText = contentToWrite
}

function getYears(days){
    return Math.floor(days / 365)
}

function getMonths(years, days){
    return days - (years * 365)
}