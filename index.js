//solution version_1

// function findSum(nums,target){
//     for (let i = 0; i < nums.length; i++){
//         let value = target - nums[i]; 
//         if(nums.includes(value)){
//             for(let j =0 ; j< nums.length; j++){
//                 if(nums[j] === value){
//                     console.log(`[${nums[i]},${nums[j]}]`);
//                 }
//             }
//         }
//     }   
// }
// findSum([2, 7, 11, 15], 9)

// solution version_1.1

function findSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let value = target - nums[i];
        if (nums.includes(value)) {
            for (let j = 0; j < nums.length; j++) {
                if (nums[j] === value && i !== j) {
                    console.log(`[${nums[i]}, ${nums[j]}]`);
                    nums[i] = null;  
                    nums[j] = null; 
                    break; 
                }
            }
        }
    }
}

findSum([2, 7, 11, 15], 17);