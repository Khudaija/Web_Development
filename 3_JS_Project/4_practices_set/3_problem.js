/* Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a 
// companies.shift();

//b
// companies.splice(2, 1, "Ola ");

// c
// companies.push("Amazon"); // add in end
companies.unshift("Amazon"); // add in start

console.log(companies);