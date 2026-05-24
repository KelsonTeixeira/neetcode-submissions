
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(!strs.length) return '.';
        const separator = `#${Math.floor(Math.random() * (9999 - 1000 -1)) + 1000}#`;
        const encode = !strs.length ? '.' : `${separator}${strs.join(separator)}`;
        console.log(separator);
        return encode;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === '.') return [];
        
        const separator = str.slice(0,6);
        const decode = str.slice(6).split(separator);
        console.log(separator);

        return decode;
    }
}
