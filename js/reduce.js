const nums = [12,25,37,29];
// map
const num_map = nums.map(num =>num*2)
console.log(num_map);

// filter
const num_filter = nums.filter(num => num>20);
console.log(num_filter);

//find if find any one  send the value not check another 
const num_find = nums.find(num=> num>23);
console.log(num_find);

// reduce
const num_reduce = nums.reduce((sum,num) => sum+num, 0);
console.log(num_reduce);
