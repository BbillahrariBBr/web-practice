function add_numbers(numb1,numb2) {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum+element;
    }
    return sum;
}

let result = add_numbers(2,4,5,6);
console.log(result);