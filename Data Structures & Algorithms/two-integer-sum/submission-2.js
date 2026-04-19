class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = new Map()
        for(let i = 0; i < nums.length; i++) {
            const key = nums[i];
            if(numMap.has(key)) {
                const item = numMap.get(key);
                item.idx.push(i);
            } else {
                numMap.set(key, {idx: [i], diff: target-key});
            }

        }
        let result = [];
        numMap.forEach(item => {
            const diff = numMap.get(item.diff);
            if(diff) {
                if(diff.idx.length > 1){
                    result = [...diff.idx];
                } else {
                    result = [item.idx[0], diff.idx[0]];
                }
            }
        })
        return result;
    }
}
