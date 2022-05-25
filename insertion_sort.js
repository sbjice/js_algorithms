let a = [5, 2, 4, 6, 1, 3];

function insertionSort(arr) {
    for (let j = 1; j < arr.length; j++) {
        let val = arr[j];
        i = j - 1;
        while (i >= 0 && arr[i] > val) { // arr[i] < val для сортировки по убыванию
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i + 1] = val;
    }
}
insertionSort(a);
console.log(a);