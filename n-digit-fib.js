

function* fib() {
    let last = BigInt(1);
    let current = BigInt(1);

    yield last;
    yield current;

    while (true) {
        current += last;
        last = current - last;
        yield current;
    }
}

function nDigitFib() {
    let i = 1;
    for(const n of fib()) {
        if(n.toString().length === 1000) {
            console.log(i);
            break;
        }
        i++;
    }
}


nDigitFib();