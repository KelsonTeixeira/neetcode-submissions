class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const nMap = new Map();
        for (let i = 0; i < numbers.length; i++) {
            const val = numbers[i];
            const idx = i+1;
            if(!nMap.has(val)) nMap.set(val, {v: [], idx: idx, d: target-val});
            nMap.get(val).v.push(val);
        }

        let result = [];

        nMap.forEach(item => {
            const dif = nMap.get(item.d);
            if(result.length === 0 && dif && dif.idx !== item.idx) {
                result = [item.idx, dif.idx];
            }
        });

        return result;
    }
}
