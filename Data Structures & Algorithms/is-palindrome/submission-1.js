class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const adpted = s.toUpperCase().replace(/[^a-zA-Z0-9]/g, '');

        return adpted === adpted.split('').reverse().join('');
    }
}
