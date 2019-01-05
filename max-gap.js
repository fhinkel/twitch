// Video: https://www.youtube.com/watch?v=oZyomw_N70o

// Given an unsorted array of numbers, find the maximum difference 
// between the successive elements in its sorted form.
// Linear time (and linear space)!

// Runtime complexity is n*log(n)
const maxGapNLogN = (arr) => {
    arr.sort((a, b) => a - b); // O(nlog(n)) - comparison sort
    // O(n+k) counting sort, k = max - min
    let maxDiff = 0;
    if (arr.length < 2) {
        return 0;
    }

    for (let i = 1; i < arr.length; i++) { // O(n)
        let diff = arr[i] - arr[i - 1];
        maxDiff = Math.max(maxDiff, diff);
    }
    return maxDiff;
}

// linear time complexity
const maxGap = (arr) => {
    const n = arr.length;
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < n; i++) {
        min = Math.min(arr[i], min);
        max = Math.max(arr[i], max);
    }

    let range = max - min;
    let lowerBound = range / (n - 1);

    let buckets = []; // n-1 buckets => linear space complexity
    for (let i = 0; i < n; i++) {
        let index = Math.floor((arr[i] - min) / lowerBound);
        if (!buckets[index]) {
            buckets[index] = {};
            buckets[index].left = arr[i];
            buckets[index].right = arr[i];
        } else {
            if (buckets[index].left > arr[i]) {
                buckets[index].left = arr[i]
            }
            if (buckets[index].right < arr[i]) {
                buckets[index].right = arr[i]
            }
        }
    }

    let maxDiff = 0;
    let prev = min;
    for (let i = 0; i < buckets.length; i++) {
        if (!buckets[i]) {
            continue;
        }
        if (buckets[i].left - prev > maxDiff) {
            maxDiff = buckets[i].left - prev;
        }
        prev = buckets[i].right;
    }

    return maxDiff;
}

const randomInput = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push((Math.random() > 0.5 ? 1 : -1) * (Math.random() * 100000));
    }
    return arr;
}

const test = (arr) => {
    if (maxGapNLogN(arr) !== maxGap(arr)) {
        console.log(arr);
        console.log(`Expected ${maxGapNLogN(arr)} to equal ${maxGap(arr)}`);
        throw new Error();
    }
}

test(randomInput(20));
test(randomInput(200));
test(randomInput(2000));

const perfTest = (n) => {
    console.log(`Array with ${n} elements:`)
    let arr = randomInput(n);
    let before = Date.now();
    maxGapNLogN(arr);
    let after = Date.now();
    console.log(`n log(n) takes ${(after - before) / 1000} seconds`);
    
    before = Date.now();
    maxGap(arr);
    after = Date.now();
    console.log(`Linear takes ${(after - before) / 1000} seconds`);
    console.log();
}

perfTest(10);
perfTest(100);
perfTest(1000);
perfTest(10000);
perfTest(5000000);
perfTest(10000000);
perfTest(20000000);




test([2, 6, 8]);
test([-2, 6, -8]);
test([20, 1, 17, 3, 16, 2, 7]);
test([-20, 1, 17, -3, 16, 2, 7]);
test([20, 1.1, 17, 3.5, -16, 2, 7]);
test([]);
test([2]);

if (maxGapNLogN([2, 6, 8]) !== 4) {
    throw new Error();
}
if (maxGapNLogN([20, 1, 17, 3, 16, 2, 7]) !== 9) {
    console.log(maxGapNLogN([20, 1, 17, 3, 16, 2, 7]));
    throw new Error();
}
if (maxGapNLogN([-20, 1, 17, -3, 16, 2, 7]) !== 17) {
    throw new Error();
}
if (maxGapNLogN([20, 1.1, 17, 3.5, -16, 2, 7]) !== 17.1) {
    throw new Error();
}
if (maxGapNLogN([20]) !== 0) {
    throw new Error();
}
if (maxGapNLogN([]) !== 0) {
    throw new Error();
}


