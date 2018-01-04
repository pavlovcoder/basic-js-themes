//1. Creation a new array with title "vehicle", which consist type objects:
var sedan = {
    name : 'Honda',
    model : 'Civic',
    volume : 1.5,
    engine : 'V3',
    comparise : function(){
        console.log('Volume of ' + sedan.name + ' ' + sedan.model + ' = ' + sedan.volume + 'L');
    }
};
var SUV = {
    name : 'BMW',
    model : 'X6',
    volume : 3.0,
    engine : 'V6',
    comparise : function(){
        console.log('Volume of ' + SUV.name + ' ' + SUV.model + ' = ' + SUV.volume + 'L');
    }
};

var vehicle = [sedan,SUV,'other car'];

vehicle[sedan.comparise()];
vehicle[SUV.comparise()];

//2. Testing Array-operator for array creation:
var newArray = new Array(15,20,25,30);
console.log(newArray);

//3. Testing operator identify array:
console.log("Is it 'NewArray' array ? - " + Array.isArray(newArray));
console.log("Is is 'NewArray' array ? - " + newArray instanceof Array);

//4. Testing join method for arrays:
var firms = ['Apple','Samsung','HP','Dell','Acer'];
console.log('International firms ' + firms.join('+'));
firms.pop();

//5. Testing popping method for array:
console.log('Array without the last element of array: ' + firms);

//6. Shifting elements in the array:
firms.shift();
console.log('Array without first element: ' + firms);

//7. Unshifting new elements to the array:
firms.unshift('Microsoft');
console.log('Array after unshifting element: ' + firms);

//8. Deleting elements in the array:
var Poland = ['Warsaw','Cracow','Gdansk','Wroclaw','Katowice','Poznan'];
delete Poland[Poland.length-1];
console.log('Polish cities without last citi: ' + Poland);

//9.Splicing an array:
Poland.splice(1,0,'Lublin','Kielce');
console.log('Polish cities after splicing: ' + Poland);
Poland.splice(1,3,'Opole','Szczecin');
console.log('Polish cities after 2-th splicing: ' + Poland);
Poland.splice(2,3);
console.log('Polish cities after 3-th splicing: ' + Poland);

//10. Concatenating arrays:
var Netherland = ['Amsterdam','Roterdam','Ultrecht','The Hague'],
Switzerland = ['Bern','Basel','Geneva','Zurich'];
console.log('Netherland array after concatenating: ' + Netherland.concat(Poland,Switzerland));

//11. Slicing out arrays:
var oldDutch = Netherland.slice(0,2),
oldSwitzerland = Switzerland.slice(1);
console.log('Old Dutch without few cities: ' + oldDutch);
console.log('Old Switzerland without few cities: ' + oldSwitzerland);

//12. Sorting alphabetically array elements:
Poland.sort();
console.log('Sorting alphabetically array elements: ' + Poland);
Poland.reverse();
console.log('Reversing array elements: ' + Poland);

//13. Sorting values of array with special method:
var numArray = [35,3,8,0.539,74,87,1.98,9924];
console.log('Default array: ' + numArray);
numArray.sort(function(a,b){return a-b});
console.log('Sorted array: ' + numArray);

//14. Searching max and min values in the array:
var testArray = [40,20,15,100,85,60,5,1000,98];
testArray.sort(function(a,b){return b-a});
console.log('Highest value of array = ' + testArray[0] + '\n' +
            'Lowest value of array = ' + testArray[testArray.length-1]
            );

//15. Searching max and min values with using Math.max and min apply:
var stArray = [9.42,3.64,5.98,0.0942,1000,1.315,7,31];
console.log('Highest value of array = ' + Math.max.apply(null,stArray) + '\n' +
            'Lowest value of array = ' + Math.min.apply(null,stArray)
            );
            
//16. Sorting values of array with object types:
var country = [
    {name:'France',population:67158000,establishment:486},
    {name:'Great Britain',population:65648000,establishment:1535},
    {name:'Italy',population:60589000,establishment:1861},
    {name:'Ukraine',population:41000000,establishment:882}
    ];
    
console.log('Default output of country-array: ' + country);