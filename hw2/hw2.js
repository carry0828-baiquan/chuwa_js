
const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];

//1. Given the array, implement a function for generating a new array which doubles the
// quantity and price in each object.

function doubleQuantityAndPrice(Objects) {
    // difference with for in
    for (const object of Objects) {
        object["quantity"] = object["quantity"] * 2;
        object["price"] = object["price"] * 2;
    }
    console.log("The result for Q1 is " + JSON.stringify(Objects))
}
doubleQuantityAndPrice(itemsObject)

// 2. Given the array, implement a function for generating a new array which contains item
// quantity > 2 and price > 300 only

const filterArray = function (Objects) {
    let newArray = [];
    for (const obj of Objects) {
        if (obj["quantity"] > 2 && obj["price"] > 300) {
            newArray.push(obj);
        }
    }
    console.log("The result for Q2 is " + JSON.stringify(newArray));
};

filterArray(itemsObject);

// 3. Given the array, implement a function to calculate the total value of the items.
const calculateSum = (Objects) => {
    let sum = 0;
    for (const object of Objects) {
        sum += object["quantity"] * object["price"]
    }
    console.log("The result for Q3 is " + sum)
}

calculateSum(itemsObject)

//4. Given the string, implement a function to remove all the non-alphabet characters and
// extra space in the string and convert the string to all lowercase
const string =
    ' Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ';

const trimString = (string) => {
  console.log("The result for Q4 is " + string.replace(/[^a-z0-9 -]/gi, '').toLowerCase().trim())
}
trimString(string);

