console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){

if (basket.push(item)) {
    return true
}
else {
    return false;
 }
}

function listItems (){

    for (i=0; i < basket.length; i++){

     console.log('in the basket is', basket[i]);

    }
}

function empty() {

    basket = basket = [];
    
}

console.log(`Basket is ${basket}`);
console.log('Adding pizza', addItem('pizza'));
console.log('Adding nachos', addItem('nachos'));
console.log('Adding frys', addItem('frys'));
console.log(`Basket is now ${basket}`);
listItems();
empty();
console.log(`Basket is now empty ${basket}`, empty());