// Given n non-negative integers representing an 
// elevation map where the width of each bar is 1, compute 
// how much water it is able to trap after raining.

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

const leftMax = (a) => {
    const max = [a[0]];
    for (let i = 1; i < a.length; i++) {
        max[i] = Math.max(max[i - 1], a[i]);
    }
    return max;
}

// O(n)
const water = (a) => {
    let w = 0;
    const lefts = leftMax(a);
    const rights = leftMax(a.reverse()).reverse();
    for (let i = 0; i < a.length; i++) {
        const waterHeight = Math.min(lefts[i], rights[i]);
        w += waterHeight - a[i];
    }
    return w;
}

console.log(water([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));