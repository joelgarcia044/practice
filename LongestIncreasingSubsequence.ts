function lengthOfLIS(nums: number[]): number {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < nums[i + 1]){
            count++;
        }      
    }
    return count;
};
