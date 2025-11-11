// selectionSort([5, 3, 8, 4, 2]);

const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        let minIdx = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[minIdx] > array[j]) {
                minIdx = j;
            }
        }

        if (minIdx !== i) {
            let temp = array[i];
            array[i] = array[minIdx];
            array[minIdx] = temp;
        }
    }

    return array;
}

console.log(selectionSort([5, 3, 8, 4, 2]));
