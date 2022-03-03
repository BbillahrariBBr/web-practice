var a = 5;
var b = 7;
console.log("before swap: a=",a,"b=",b);
// swap using another variable
var temp = a;
a=b;
b= temp;

console.log("after swap: a=",a,"b=",b);

//swap using another variable mathmatecal term
var x = 12;
var y =14;
console.log("before swap: x=",x,"y=",y);
x=x+y;
y = x-y;
x = x-y;
console.log("after swap: x=",x,"y=",y);

//swap using js 
var p = 21;
var q = 46;
console.log("before swap: p=",p,"q=",q);
[p,q] =[q,p];
console.log("after swap: p=",p,"q=",q);

