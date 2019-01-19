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

const longestSubSequence = (s, words) => {
    // words.sort((a, b)=> a-b)
    words.sort((a, b) => (b.length - a.length));

    

    return '';
}

const test = (s, words, expected) => {
    const res = longestSubSequence(s, words);
    if(res !== expected) {
        console.log(`${res} != ${expected}`);
        throw new Error();
    }
}

test(s, words, 'apple');
test('asfkjwfpbhadslsegsfd', words, 'bale');
test('', words, '');
test(s, [], '');
test(s, ['xxxx'], '');
test(s, [s, ...words], s);