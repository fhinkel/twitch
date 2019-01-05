// Given an unsorted array of numbers, find the maximum difference 
// between the successive elements in its sorted form.


const maxGap = (arr) => {
    arr.sort((a, b) => a - b);
    let maxDiff = 0;
    if (arr.length === 0) {
        return 0;
    }
    let prev = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - prev;
        maxDiff = Math.max(maxDiff, diff);
        prev = arr[i];
    }
    return maxDiff;
}

if (maxGap([20, 1, 17, 3, 16, 2, 7]) !== 9) {
    throw new Error();
}
if (maxGap([-20, 1, 17, -3, 16, 2, 7]) !== 17) {
    throw new Error();
}
if (maxGap([20, 1.1, 17, 3.5, -16, 2, 7]) !== 17.1) {
    throw new Error();
}


