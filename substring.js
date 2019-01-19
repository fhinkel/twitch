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
        for(const char of word) {
            index = s.indexOf(char, index);
            if(index === -1) {
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
// test('sfkjwfpbhaasdfjlwefkjasdfwfasdfwefdslsegsfd', ['afwefasfd', 'rgisd'], 'afwefasfd');
test(longestSubSequence, '', words, '');
test(longestSubSequence, s, [], '');
test(longestSubSequence, s, ['xxxx'], '');
test(longestSubSequence, s, [s, ...words], s);
