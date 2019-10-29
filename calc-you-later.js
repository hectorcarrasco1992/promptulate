

let what = prompt('Please enter your operation followed by your number variables');

const arr = what.split(' ')
// for(let i =0; i < what.length; i++){
//     if(what[i] !== ' '){
//         arr.push(what[i])

//     }
    

// }

// console.log(what.split(' '))
// arr.push(what.split(' '))
const operation = arr[0]
const num1 = arr[1]
const num2 = arr[2]

 const result = calculate(operation, num1, num2)
  

 document.querySelector('#result').innerHTML = result
