//1. Displaying current date:
var currentDate = Date();
console.log("Current date: " + currentDate);

//2. Using date string for creation date object:
console.log("Date creation-1: " + new Date('January 25, 2018 23:45:25'));

//3. Using number for creation date as millisecond from starting point:
console.log("Date creation with milliseconds: " + new Date(50889600000));

//4. Using 7-numbers for creation customized date:
console.log("Date creation with 7 numbers: " + new Date(2023,8,30,17,47,58,55));

//5. Using few numbers for creation customized date with ommiting few last numbers:
console.log("Date creation with 3 numbers: " + new Date(2018,2,5,20));

//6. Using UTC-method for displaying created date:
var newDate = new Date(2021,4,8,0,40,55,55);
console.log("Date creation with UTC: " + newDate.toUTCString());

//7. Using most readable format for displaing date:
console.log("Date creation with the most readable format: " + newDate.toDateString());

//8. Using ISO-format for date writing:
console.log("Date creation with ISO: " + new Date("2017-04-25T12:00:00-06:30"));

//9. Using short format of date writing:
console.log("Date creation with short format: " + new Date("11/22/2017"));

//10. Using long format of date writing:
console.log("Date creation with long format: " + new Date("August 18 2017"));

//11. Using full-format of date writing:
console.log("Date creation with full format: " + new Date("Fri Feb 23 2018 22:31:53 GMT+0100 (W. Europe Standart Time)"));

//12. Testing date get methods:
console.log("Testing date getting methods: " + '\n' + 
    '1) ' + newDate.getFullYear() + '\n' + 
    '2) ' + newDate.getDay() + '\n' + 
    '3) ' + newDate.getMilliseconds() + '\n' + 
    '4) ' + newDate.getTime() + '\n'
    );
    
//13. Using special array with names of weekdays:
var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Using special array with names for displaying weekdays: " + '\n' +
    weekdays[newDate.getDay()]
    );
    
//14. Adding a new day to the date:
newDate.setDate(newDate.getDate());
console.log("Adding new 20 days to existed date: " + newDate);

//15. Date input - parsing dates:
var msec = Date.parse("January 15, 2018"),
convertToMsc = new Date(msec);
console.log("Millisecond -> Date: " + convertToMsc);