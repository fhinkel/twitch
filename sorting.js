// Mergesort, Quicksort, Heapsort

const testMergeSort = (a) => {
    const original = a.slice();
    const res = mergeSort(a);
    a.sort((a, b) => a - b);
    for (let i = 0; i < res.length; i++) {
        if (res[i] !== a[i]) {
            console.log(`${original} got sorted as ${res}`);
            throw new Error();
        }
    }
    // console.log(res);
}

// Merge two sorted arrays
const merge = (sortedLeft, sortedRight) => {
    let res = [];
    let i = 0;
    let j = 0;
    while (i < sortedLeft.length && j < sortedRight.length) {
        if (sortedLeft[i] < sortedRight[j]) {
            res.push(sortedLeft[i]);
            i++;
        } else {
            res.push(sortedRight[j]);
            j++;
        }
    }
    while (j < sortedRight.length) {
        res.push(sortedRight[j]);
        j++;
    }
    while (i < sortedLeft.length) {
        res.push(sortedLeft[i]);
        i++;
    }
    return res;
}

const testMergeFunction = (left, right) => {
    let a = [...left, ...right];
    a.sort((a, b) => a - b);
    let res = merge(left, right);
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== res[i]) {
            console.log(`Yikes, ${left}, ${right} got merged into ${res}`);
            throw new Error();
        }
    }
    // console.log(res);
}

const mergeSort = (a) => {
    if (a.length < 2) {
        return a;
    }
    
    let middle = Math.floor(a.length / 2);
    let sortedLeft = mergeSort(a.slice(0, middle));
    let sortedRight = mergeSort(a.slice(middle));
    return merge(sortedLeft, sortedRight);
}

testMergeFunction([1, 3, 5], [2, 4, 6]);
testMergeFunction([1, 3, 5, 7, 9], [2, 4, 6]);
testMergeFunction([1, 3, 5], [2, 4, 6, 8, 10]);
testMergeFunction([], [2, 4, 6]);
testMergeFunction([1, 3, 4, 5, 8], [2, 4, 6, 8, 10]);
testMergeSort([2]);
testMergeSort([]);
testMergeSort([1, 2, 3, 4]);
testMergeSort([5, 3, 8, 3, 5, 1, 1, 89, 17])
testMergeSort([5, -13, 8, 3, 42, 100000, 5, -1, 1, 89, 17])