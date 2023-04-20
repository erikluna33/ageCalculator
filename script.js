// Submit button
const submitBtn = document.querySelector(".submit");


// Today's date
let currentDate = new Date();
let date = currentDate.getDate();
let year = currentDate.getFullYear();
let month = currentDate.getMonth()+1;
let dayDifference = 0;
let monthDifference = 0;
let yearDifference = 0;


// User submits DOB info
submitBtn.addEventListener("click", function(){
    let birthMonth = parseInt(document.querySelector(".user-month").value)
    let birthDay = parseInt(document.querySelector(".user-day").value)
    let birthYear = parseInt(document.querySelector(".user-year").value)


    //Calculating the day of the month
    dayDifference = date - birthDay;
    if(dayDifference < 0){
        month = month - 1;
        date = date + 30;
        dayDifference = 0;
        dayDifference = date - birthDay;
        document.querySelector(".result-day").textContent = dayDifference;
    }
    else{
        document.querySelector(".result-day").textContent = dayDifference;
    }


    //Calculating the month
    monthDifference = month - birthMonth;
    if(monthDifference < 0){
        year = year - 1;
        month = month + 12;
        monthDifference = 0;
        monthDifference = month - birthMonth;
        document.querySelector(".result-month").textContent = monthDifference;
    }
    else{
        document.querySelector(".result-month").textContent = monthDifference;
    }


    //Calculating the year;
    console.log(`The year is now ${year}`);
    yearDifference = year - birthYear;
    if(yearDifference < 0){
        alert("You were not born yet!")
    }
    else{
        document.querySelector(".result-year").textContent = yearDifference;
    }

})