class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length === 0 || nums.length === 1) return false;
        const list = nums.sort();
        for(let i = 0; i < list.length; i++) {
            if(list[i] === list[i+1]){
                return true;
            }
        }
        return false;
    }
}
