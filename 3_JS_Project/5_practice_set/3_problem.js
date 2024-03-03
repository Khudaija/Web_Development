// For a given array of numbers, print the square of each value using the forEach loop

let nums = [2, 3, 4, 5, 6];

// nums.forEach((num) => {
//     // console.log(num * num);
//     console.log(num**2);
// });

let calcSquare = (nums) => {
    console.log(nums * nums);
}

nums.forEach(calcSquare);