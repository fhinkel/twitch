// Mergesort, Quicksort, Heapsort

const test = (a) => {
    const original = a.slice();
    const res = mergeSort(a);
    a.sort((a, b) => a - b);
    for (let i = 0; i < res.length; i++) {
        if (res[i] !== a[i]) {
            console.log(`${original} got sorted as ${res}`);
            throw new Error();
        }
    }
    console.log(res);
}

const mergeSort = (a) => {
    let copy = a.slice();
    copy.sort((a, b) => a - b);
    return copy;
}

test([1, 2, 3, 4]);
test([5, 3, 8, 3, 5, 1, 1, 89, 17])