
const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];

//1. Given the array, implement a function for generating a new array which doubles the
// quantity and price in each object.

function doubleQuantityAndPrice(obj) {
    let container = {}
    container["quantity"] = obj["quantity"] * 2
    container["price"] = obj["price"] * 2
    return container;
}

let doubled = itemsObject.map(doubleQuantityAndPrice)

console.log("Q1", doubled)
// 2. Given the array, implement a function for generating a new array which contains item
// quantity > 2 and price > 300 only

const filterArray = function (objects) {
   return objects["quantity"] > 2 && objects["price"] > 300;
};

let filtered = itemsObject.filter(filterArray)

console.log("Q2", filtered)
// 3. Given the array, implement a function to calculate the total value of the items.
const calculateSum = (sum, objects) => {
    return sum + objects["quantity"] * objects["price"]
}

let calculated = itemsObject.reduce(calculateSum, 0)
console.log("Q3: ", calculated)

//4. Given the string, implement a function to remove all the non-alphabet characters and
// extra space in the string and convert the string to all lowercase
const string =
    ' Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ';

const trimString = (string) => {
  console.log("The result for Q4 is " + string.replace(/[^A-Za-z0-9]/g, ' ').toLowerCase().trim())
}

trimString(string);

