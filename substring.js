// Given a string s and an array of words, find that longest word 
// that's a substring of s.

// Word w is a subsequence of s if some number of characters, possibly 
// zero, can be deleted from s to form w, without 
// reordering the remaining characters.

// s = "abppplee" and 
// words = {"able", "ale", "apple", "bale", "kangaroo"} 
// the correct output would be "apple"

// Assumption [a-z]

const s = "abppplee";
const words = ["able", "ale", "apple", "bale", "kangaroo"];



// n number of letters in s
// O(w*log(w) + n*w)
const longestSubSequenceRegExp = (s, words) => {

    const isSubSequence = (s, word) => {
        // 'abc' => 'a.*b.*c'
        const match = s.match(word.split('').join('.*'));
        return match ? true : false;
    }

    // O(w*log(w)) - w number of words
    words.sort((a, b) => (b.length - a.length));

    for (const word of words) {
        if (isSubSequence(s, word)) {
            return word;
        }
    }
    return '';
}

// O(w*log(w) + n*w)
const longestSubSequence = (s, words) => {

    const isSubSequence = (s, word) => {
        let index = -1;
        for (const char of word) {
            index = s.indexOf(char, index);
            if (index === -1) {
                return false;
            }
        }
        return true;
    }

    // O(w*log(w)) - w number of words
    words.sort((a, b) => (b.length - a.length));

    for (const word of words) {
        if (isSubSequence(s, word)) {
            return word;
        }
    }
    return '';
}



// let g = gen();
// console.log(g.next());
// console.log('before the loop')
// for (const res of g) {
//     console.log('in loop: ')
//     console.log(res);
// }


function* gen(left, right) {
    if (left.length === 0) {
        yield right;
        return;
    }

    let char = left.slice(-1);
    yield* gen(left.slice(0, -1), char + right);
    yield* gen(left.slice(0, -1), right);
}


const longestExponential = (s, words) => {
    let substrings = [];
    const allSubStrings = gen(s, '');
    for (const substring of allSubStrings) {
        if (words.includes(substring)) {
            substrings.push(substring);
        }
    }
    substrings.sort((a, b) => b.length - a.length);
    return substrings.length > 0 ? substrings[0] : '';
}

const test = (f, s, words, expected) => {
    const res = f(s, words);
    if (res !== expected) {
        console.log(`${res} != ${expected}`);
        throw new Error();
    }
}

test(longestSubSequence, s, words, 'apple');
test(longestSubSequenceRegExp, s, words, 'apple');
test(longestSubSequence, 'sfkjwfpbhadslsegsfd', words, 'bale');
test(longestSubSequence, 'sfkjwfpbhaasdfjlwefkjasdfwfasdfwefdslsegsfdxxx', ['afwefasfd', 'rgisd'], 'afwefasfd');
test(longestSubSequence, '', words, '');
test(longestSubSequence, s, [], '');
test(longestSubSequence, s, ['xxxx'], '');
test(longestSubSequence, s, [s, ...words], s);

test(longestExponential, s, words, 'apple');
// test(longestExponential, 'sfkjwfpbhadslsegsfd', words, 'bale');
// test(longestExponential, 'sfkjwfpbhaasdfjlwefkjasdfwfasdfwefdslsegsfd', ['afwefasfd', 'rgisd'], 'afwefasfd');
test(longestExponential, '', words, '');
test(longestExponential, s, [], '');
test(longestExponential, s, ['xxxx'], '');
test(longestExponential, s, [s, ...words], s);