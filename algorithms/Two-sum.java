import java.util.*;
class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int[] result = new int[2];
        for(int i = 0; i < nums.length; i++){
            map.put(nums[i], i);
        }
        for(int j = 0; j < nums.length; j++){
            int firstHit = target- nums[j];
            if(map.containsKey(firstHit) && map.get(firstHit) != j){
                result[0] = j;
                result[1] = map.get(firstHit);
            }
        }
        return result;
    }
}