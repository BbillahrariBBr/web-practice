var roll =[2,3,4,5,3,4,2,6,77,54,75,44,55,54];
var unique =[]
for(var i =0;i<roll.length;i++){
    var element = roll[i];
    var index = unique.indexOf(element);
    if(index == -1){
        unique.push(element)
    }
}

console.log(unique)