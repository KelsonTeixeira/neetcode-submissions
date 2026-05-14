class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = new Map();
        for(const num of nums) {
            if(!numsMap.has(num)) numsMap.set(num, []);
            numsMap.get(num).push(num);
        }
        const arrList = [];
        numsMap.forEach(arr => arrList.push(arr));
        arrList.sort((a, b) => b.length - a.length);
        const result = [];
        for(let i = 0; i < k; i++) {
            result.push(arrList[i][0]);
        }
        return result;
    }
}
