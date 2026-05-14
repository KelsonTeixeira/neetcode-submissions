class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const adpted = s.toUpperCase().replace(/[^a-zA-Z0-9]/g, '').split('');
        const inversed = [];
        for(let i = adpted.length - 1; i >= 0; i--) {
            inversed.push(adpted[i]);
        }
        if(adpted.join('') === inversed.join('')) return true;

        return false;
    }
}
