const arr = [15, 3, 15, 42, -2, -5, -41, 57, 154, 3, 2, 7, 8, 23, -15, 32];
let count = 0;

function selectionSort(array) { // o(n**2)
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[i] < array[minIndex]) {
                minIndex = j;
            }
            count++;
        }
        let tmp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tmp;
    }
    return array;
}

console.log(selectionSort(arr));
console.log(count);