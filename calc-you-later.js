
//alert('Please enter your operation followed by your number variables');
let what = prompt('Please enter your operation followed by your number variables');
const arr = []
for(let i =0; i < what.length; i++){
    arr.push(what[i])

}

const operation = arr[0]
const num1 = Number(arr[1])
const num2 = Number(arr[2])

 const result = calculate(operation, num1, num2)
  

 document.querySelector('#result').innerHTML = result
// const reaction = document.querySelector('#result')

// onclick(reaction, result)