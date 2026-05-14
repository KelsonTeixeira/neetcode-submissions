class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        const list = nums.sort((a,b) => (a-b));
        for(let i = 0; i < list.length - 1; i++){
            if(list[i] === list[i+1]) return true;
        }
        return false;
    }
}
