class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const mapS = new Map();
        const order = s.length > t.length ? [s, t] : [t, s];
        for(const char of order[0]) {
            if(!mapS.get(char)) mapS.set(char, []);
            mapS.get(char).push(char);
        }

        for(const char of order[1]) {
            const item = mapS.get(char);
            if(item){
                item.pop();
                if(item.length === 0) mapS.delete(char);
            }
        }

        if(mapS.size === 0) return true;

        return false;

    }

    // isAnagram(s, t) {
    //     if(s.length !== t.length) return false;
    //     const sSorted = s.split('').sort(); 
    //     const tSorted = t.split('').sort();
    //     for(let i = 0; i < sSorted.length; i++){
    //         if(sSorted[i] !== tSorted[i]) return false;
    //     }
    //     return true;
    // }
}
