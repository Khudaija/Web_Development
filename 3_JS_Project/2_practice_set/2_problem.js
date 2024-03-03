/* Write a code which can give grades to students according to their scores:
- 80 - 100, A
- 70 - 79, B
- 60 - 69,C
- 50 - 59, D
- 0 -49, F
*/

let marks = prompt("Enter the Marks: ");

if(100>=marks && marks>=80 ){
    console.log("Grade A");
}
else if(79>=marks && marks>=70){
    console.log("Grade B");
}
else if(69>=marks && marks>=60){
    console.log("Grade C");
}
else if(59>=marks && marks>=50){
    console.log("Grade D");
}
else if(49>=marks && marks>=0){
    console.log("Grade F");
}
else{
    console.log("Invalid Marks");
}