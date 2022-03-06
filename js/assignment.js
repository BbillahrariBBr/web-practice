function tinyFriend(friendsName){
    var  lnght = friendsName[0].length; ;
    var tiny;
    for(var i = 0; i<friendsName.length;i++){
        var size = friendsName[i].length;
        if (size<= lnght){
            lnght = friendsName[i].length;
            tiny = friendsName[i];
            
        }
            
    }
    return tiny;
}


var friendName = ["akash", "sadi", "Salman", "Jhanjkar","joy","ru"]
var chottoBondhu = tinyFriend(friendName);

console.log(chottoBondhu);

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

function bricCalculator(floor){
    var totalFeet;
    var brick;
    if (floor <= 10){
        totalFeet = floor * 15;
        brick = totalFeet *1000;
          
    }
    if(floor <= 20){
        var firstTenth = 15*10;
        var secondTenth = (floor -10) * 12;
        totalFeet = firstTenth +secondTenth;
        brick = totalFeet * 1000;

    }
    else{

        var firstTenth = 15*10;
        var secondTenth = 10 * 12;
        var otherTenth = (floor -20) * 10;
        totalFeet = firstTenth +secondTenth +otherTenth;
        brick = totalFeet * 1000;
    }
    return brick;
}


var totalBrick = bricCalculator(55);
console.log("total brickneed ", totalBrick, "pices");
