'use strict';
console.log('Helloo');


var limit = 30;
var a = 0;
var b = 1;
console.log(a);

if(limit > 0) {
    console.log(b);
}

while(a+b<=limit) {
var temp = b;
b = a + b;
a = temp;
console.log(b)
};