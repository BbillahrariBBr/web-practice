function feetToMile(feet){
    var mile = feet/5280;
    return mile

}

var feetconvert = feetToMile(2112009);
console.log(feetconvert);

function woodCalculator(chair,table,bed){
    var chairWood = 1*chair;
    var tableWood = 3*table;
    var bedWood = 5*bed;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood; 

}

var needFurniture = woodCalculator(14,5,12)
console.log("total Wood need ", needFurniture, "Cubic feet");
