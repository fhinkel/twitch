// Mergesort, Quicksort, Heapsort

const testSort = (a, f) => {
    const original = a.slice();
    const res = f(a).slice();
    a.sort((a, b) => a - b);
    if (res.length !== a.length) {
        console.log(`${original} got sorted as ${res}`);
        throw new Error();
    }
    for (let i = 0; i < a.length; i++) {
        if (res[i] !== a[i]) {
            console.log(`${original} got sorted as ${res}`);
            throw new Error();
        }
    }
    console.log(res);
}

const testBogoSort = (a) => {
    const original = [...a];
    const res = [...bogoSort(a)];
    a.sort((a, b) => a - b);
    for (let i = 0; i < res.length; i++) {
        if (res[i] !== a[i]) {
            console.log(`${original} got sorted as ${res}`);
            throw new Error();
        }
    }
    console.log(res);
}

const bogoSort = (a) => {
    const isSorted = (a) => {
        let prev = Number.NEGATIVE_INFINITY;
        for (let i = 0; i < a.length; i++) {
            if (a[i] < prev) {
                return false;
            }
            prev = a[i];
        }
        return true;
    }

    const shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    while (!isSorted(a)) {
        a = shuffle(a);
    }
    return a;
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

class Heap {
    constructor() {
        this.elements = [];
    }

    //      1
    //     2 3
    //    45 67
    //  89 1011 1213 1415
    // child of i: 2*i, 2*i+1


    //     0
    //    1 2
    //   34 56
    // 78 910 1112 1314

    bubbleup(i) {
        let parent = Math.floor((i - 1) / 2);
        const a = this.elements;
        while (parent >= 0 && a[parent] > a[i]) {
            [a[parent], a[i]] = [a[i], a[parent]];
            i = parent;
            parent = Math.floor((i - 1) / 2);
        }
    }

    push(e) {
        this.elements.push(e);
        this.bubbleup(this.size() - 1);
    }

    sinkdown(i) {
        const leftChild = i * 2 + 1;
        const rightChild = i * 2 + 2;
        const a = this.elements;
        let swap = null;
        if (leftChild < this.size() && a[leftChild] < a[i]) {
            swap = leftChild;
        }
        if (rightChild < this.size() && a[rightChild] < (swap ? a[leftChild] : a[i])) {
            swap = rightChild;
        }
        if (!swap) {
            return;
        }
        [a[i], a[swap]] = [a[swap], a[i]];

        this.sinkdown(swap);
    }

    pop() {
        if (this.size() === 0) {
            throw new Error('Cannot pop on empty heap');
        }
        let min = this.elements[0];
        let last = this.elements.pop();

        if (this.size() > 0) {
            this.elements[0] = last;
            this.sinkdown(0);
        }

        return min;
    }

    size() {
        return this.elements.length;
    }
}

const heapSort = (a) => {
    let res = [];
    let heap = new Heap();
    a.forEach(e => heap.push(e));
    while (heap.size() !== 0) {
        res.push(heap.pop());
    }
    return res;
}

testSort([2], mergeSort);
testSort([], mergeSort);
testSort([1, 2, 3, 4], mergeSort);
testSort([5, 3, 8, 3, 5, 1, 1, 89, 17], mergeSort)
testSort([5, -13, 8, 3, 42, 100000, 5, -1, 1, 89, 17], mergeSort)

testSort([2], heapSort);
testSort([], heapSort);
testSort([1, 2, 3, 4], heapSort);
testSort([1, 2, 3, 4, 5, 8, 9, 12, 13, 15, 16], heapSort);
testSort([5, 3, 8, 3, 5, 1, 1, 89, 17], heapSort)
testSort([5, -13, 8, 3, 42, 100000, 5, -1, 1, 89, 17], heapSort)

testBogoSort([2]);
testBogoSort([]);
testBogoSort([1, 2, 3, 4]);
// testBogoSort([5, 3, 8, 3, 5, 1, 1, 89, 17])
// testBogoSort([5, -13, 8, 3, 42, 100000, 5, -1, 1, 89, 17])