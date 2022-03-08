function evenify(num) {
    if (num % 2 == 0) {
        console.log(num,': is even');
    }
    else{
        console.log(num*2, ': is odd');
    }
}

function evenify_all(nums)  {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        evenify(num);
    }
    
    
}

nums = [5,7,12,23,14,18];
evenify_all(nums);

ages = [13,15,17,20,34];
evenify_all(ages);