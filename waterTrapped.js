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
    const rights = leftMax(a.slice().reverse()).reverse();
    for (let i = 0; i < a.length; i++) {
        const waterHeight = Math.min(lefts[i], rights[i]);
        w += waterHeight - a[i];
    }
    return w;
}


// constantSpace
const trappedWater = (a) => {
    if(a.length < 3) {
        return 0;
    }
    let water = 0;
    let left = 0;
    let right = a.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    while (left < right) {
        if (a[left] < a[right]) {
            const height = Math.min(leftMax, rightMax);
            water += Math.max(0, height - a[left]);
            left++;
            leftMax = Math.max(a[left], leftMax);
        } else {
            const height = Math.min(leftMax, rightMax);
            water += Math.max(0, height - a[right]);
            right--;
            rightMax = Math.max(a[right], rightMax);
        }
    }

    return water;
}


const test = (a) => {
    let linear = water(a);
    let constant = trappedWater(a);
    if (linear !== constant) {
        console.log(a);
        console.log(linear, constant)
        throw new Error(a);
    }
}

test([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
test([0, 1, 0, 2, 2, 4, 6, 3, 1, 8, 9, 1, 0, 1, 3, 2, 1, 2, 1]);
test([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
test([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);