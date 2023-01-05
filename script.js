// Importing the module
// const readline = require("readline");


// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("What do you think of node.js? ", function (answer) {
//     // TODO: Log the answer in a database
//     console.log("Thank you for your valuable feedback:", answer);

//     rl.close();
// })

// Enter the number
// let a = Number(readline.question());


// let number = [];
// for (let i = 0; i < a; ++i) {
//     number.push(Number(readline.question()));
// }
// console.log(number);

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');
    console.log("main")
    main();
});

function main() {
    // Write your code here
    // Use console.log to output the result
    // var arr = [];
    // while(i < arr.length ) {
    //     arr[i] = sc.nextInt();
    //     if(arr[i] < 0){
    //         negarr[j] = arr[i];
    //         j = j + 1;
    //     }
    //     i = i + 1;
    // }
    console.log("main")

}