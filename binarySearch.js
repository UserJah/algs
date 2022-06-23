// only for sorted DS!

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let counter = 0;

function binarySearch(array, item, start, end) { // o(logn)

    let middle = Math.floor((start + end) / 2);
    counter++
    if (item === array[middle]) {
        return middle;
    }

    if (item < array[middle]) {
        return binarySearch(array, item, start, middle - 1);
    } else {
        return binarySearch(array, item, middle + 1, end);
    }
}

console.log(binarySearch(arr, 15, 0, arr.length));
console.log(counter);