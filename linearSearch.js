const arr = [6,7,19,2,4,88,53,2,1,15,7,98,13];

function linearSearch(array, item)  {  // o(n)
    for (let i=0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return 'item not in array!';
}


console.log(linearSearch(arr, 5));
console.log(linearSearch(arr, 1));