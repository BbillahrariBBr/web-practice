function explain_callback(name,age, task) {
    console.log('Hello ', name);
    console.log('your age is', age);
    task();
}

function washHand() {
    console.log('Wash Your Hand');
}

function takeShower() {
    console.log('take Shower');
}

explain_callback('Shagir',22,washHand);
explain_callback('mugir',17, takeShower);
