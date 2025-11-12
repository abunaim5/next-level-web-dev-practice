// insertionSort([5, 3, 8, 4, 2]);

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--
        }
        arr[j + 1] = current;
        // console.log(arr);
    }
    return arr;
}

console.log(insertionSort([5, 3, 8, 4, 2]));