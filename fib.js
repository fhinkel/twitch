// Each new term in the Fibonacci sequence is generated 
// by adding the previous two terms. By starting 
// with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence 
// whose values do not exceed four million, find the 
// sum of the even-valued terms.

function* fib() {
    yield 2;

    let last = 1;
    let current = 2;

    while (true) {
        current = last + current;
        last = current - last;
        current = last + current;
        last = current - last;
        current = last + current;
        last = current - last;
        yield current;
    }
}

const fibSum = () => {
    let sum = 0;
    let gen = fib();

    let current = gen.next().value;
    while (current <= 4000000) {
        sum += current + 1;
        current = gen.next().value
    }
    console.log(sum);
}

fibSum();