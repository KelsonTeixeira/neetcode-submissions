class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = new Map();
        for(const str of strs){
            let key = str.split('').sort().join('');
            if(!strMap.has(key)) strMap.set(key, []);
            strMap.get(key).push(str);
        }
        const result = [];
        strMap.forEach(arr => result.push(arr));
        return result;
    }
}
