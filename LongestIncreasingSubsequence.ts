
function lengthOfLIS(nums: number[]): number {
    let count, max, i = 0;
    let temp = [];
    let lis = Array(nums.length).fill(0);
    for (let i; i < nums.length; i++) {
        lis[i] = 1;
    }
    
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] > nums[j] && lis[i] < lis[j+1]){
                lis[i] = lis[j+1];
            }
        }   
    }
    for(i = 0; i < nums.length; i++){
        if(max < lis[i]){ max = lis[i];}
    }


    

    // for(let i = 0; i < temp.length; i++){
    //     if(temp[i] >= temp[i+1]){
    //         temp.pop();
    //     }
    // }
    // console.log("length:" + temp);
    return max;
};
