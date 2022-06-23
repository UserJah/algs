const arr = [0, 3, 15, 42, -2, -5, -41, 57, 154, 3, 2, 7, 8, 23, -15, 32];
let count = 0;


function bubbleSort(array) { // o(n**2)
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
            count++;
        }
    }
    return array;
}

console.log(bubbleSort(arr));
console.log(count);