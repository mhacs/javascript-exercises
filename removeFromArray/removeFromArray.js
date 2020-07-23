function arr1(){
    const array1 = [1, 2, 3, 4]
const index = array1.indexOf(3);
const newArray = array1.splice(index, 1); 
//console.log(newArray);
console.log(array1)
}

function removeMultipleValues(){
    let thisArr = [1, 2, 3, 4];
    let forDeletion = [2, 3]
    thisArr = thisArr.filter(item => !forDeletion.includes(item));
console.log(thisArr)
}

function ignoresNonValues(){
    let arr = [1, 2, 3, 4];
const splicedNum = arr.splice(2, "cat");
console.log(arr)
}

function emptyArray(){
    let arr = [1, 2, 3, 4];
    arr.splice(0, arr.length);
    console.log(arr);    
}

function run(){
    arr1();
    removeMultipleValues();
    ignoresNonValues();
    emptyArray();
}

run();

