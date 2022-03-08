function evenify(num) {
    let result
    if (num % 2 == 0) {
        result = num;
    }
    else{
        result = num*2;
    }
    return result;
}
let even_double = evenify(17);
console.log(even_double);

function evenify_all(nums)  {
    var even_arr = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        result_even = evenify(num);
        even_arr.push(result_even);
    }
    return even_arr;
    
    
}

nums = [5,7,12,23,14,18];
let array_result = evenify_all(nums);
console.log(array_result);

ages = [13,15,17,20,34];
let age_result = evenify_all(ages);
console.log(age_result);