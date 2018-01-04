//1. Exponential notation method:
var x = 1435.839953;

console.log('Expontential notation method:\n');
console.log('1) ' + x.toExponential(2) + '\n' +
            '2) ' + x.toExponential(5) + '\n' +
            '3) ' + x.toExponential(7) + '\n'
            );
            
//2. Identify number behind decimal point:
console.log('Identify numbers behind decimal point:\n');
console.log('1) ' + x.toFixed(1) + '\n' + 
            '2) ' + x.toFixed(4) + '\n' + 
            '3) ' + x.toFixed(8) + '\n'
            );
            
//3. Number written with a specified length:
console.log('Number written with a specified length:\n');
console.log('1) ' + x.toPrecision(2) + '\n' +
            '2) ' + x.toPrecision(6) + '\n' + 
            '3) ' + x.toPrecision(10) + '\n'
            );

//4. Return number as a number:
console.log('Return number as a number:\n');
console.log('1) ' + x.valueOf() + '\n' +
            '2) ' + (88.88934).valueOf() + '\n' +
            '3) ' + (0.592 + 824*5 - 43).valueOf() + '\n'
            );
            
//5. Converting variables to numbers methods:
console.log('Using Number() global methods:\n');
console.log('1) ' + Number(" 30  ") + '\n' +
            '2) ' + Number(true) + '\n' +
            '3) ' + Number("Jimmy Fallon") + '\n' + 
            '4) ' + Number(new Date(2018-03-05)) + '\n'
            );
            
//6. Using number properties in the wrapper object Number():
console.log('Number properties in the wrapper Number():\n');
console.log('1) The largest possible number: ' + Number.MAX_VALUE + '\n' +
            '2) The smallest possible number: ' + Number.MIN_VALUE + '\n' +
            '3) Negative infinity: ' + Number.NEGATIVE_INFINITY + '\n' + 
            '4) Positive infinity: ' + Number.POSITIVE_INFINITY + '\n'
            );
            
//7. Getting Number constructor:
console.log('Getting Number() - constructor:\n');
console.log(x.constructor() + '\n');

//8. Testing Number prototype constructor:
console.log('Adding new properties to the global prototype:\n');
Number.prototype.vanDerPauw = 4.53236;
Number.prototype.gonShmutz = 1.11786;
Number.prototype.fiveThRoot = function(){
    return Math.pow(this.valueOf(),1/5);
};
Number.prototype.sine = function(){
    return Math.sin(this.valueOf());
};
Number.prototype.vanDerPauwCalc = function(){
    return Math.sqrt(this.gonShmutz)*4 + Math.pow(this.vanDerPauw,3)*100;
};

console.log('1) Getting Van-Der-Pauw constant = ' + x.vanDerPauw + '\n' + 
            '2) Getting Gon-Shmutz constant = ' + x.gonShmutz + '\n' +
            '3) Calculate 5-th root = ' + x.fiveThRoot() + '\n' +
            '4) Calculate sine = ' + x.sine() + '\n' +
            '5) Calculate Van-Der-Pauw statement = ' + x.vanDerPauwCalc() + '\n'
            )

//9. Testing finite of a number:
console.log('Testing finite of a number:\n');
console.log('1) ' + Number.isFinite(4234.523) + '\n' +
            '2) ' + Number.isFinite('Finite number') + '\n' +
            '3) ' + Number.isFinite(-Infinity) + '\n'
            );

//10. Checking integer of value:
console.log('Testing integer value:\n');
console.log('1) ' + Number.isInteger(false) + '\n' +
            '2) ' + Number.isInteger(842) + '\n' +
            '3) ' + Number.isInteger(8.28992) + '\n'
            );

//11. Checking IEEE-754 double precision number:
console.log('Checking IEEE-754 double precision number:\n');
console.log('1) ' + Number.isSafeInteger(248888) + '\n' +
            '2) ' + Number.isSafeInteger(Math.pow(2,53)) + '\n' +
            '3) ' + Number.isSafeInteger(Infinity) + '\n'
            );
            