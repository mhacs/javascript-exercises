function leapYears(yearLeap){
    if(yearLeap % 100 != 0 && yearLeap % 400 == 0 || yearLeap % 4 == 0){
        console.log("The year is leap")
    }
    else{
        console.log("The year is not a leap!!")
    }
}
//checkYear(yearLeap);
module.exports = leapYears;
//console.log(checkYear(2000))