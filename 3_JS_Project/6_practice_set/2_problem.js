let divs = document.querySelectorAll(".box");
// console.log(divs);  // simply print
// console.log(divs[0]); //indexes

//beggineer
// divs[0].innerText = "new Unique value 1";
// divs[1].innerText = "new Unique value2";
// divs[2].innerText = "new Unique value 3";

let idx = 1;
for (div of divs){
    // console.log(div); // print
    div.innerText = `new unique value ${idx}`;
    idx++;
}