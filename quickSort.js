const arr = [0, 3, 15, 42, -2, -5, -41, 57, 154, 3, 2, 7, 8, 23, -15, 32];
let count = 0;

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (i === pivotIndex) {
            continue
        }
        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}


console.log(quickSort(arr));
console.log(count);