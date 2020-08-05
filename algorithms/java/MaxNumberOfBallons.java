class Solution {
    public int maxNumberOfBalloons(String text) {
        HashMap<Character, Integer> map = new HashMap<>();
        for(int i = 0; i < text.length; i++){
            if("balloons".indexOf(text.charAt(i)) > -1){
                map.put(text.charAt(i), map.get(text.charAt(i)) + 1);
            }
        }
        //search thru map and decrease the count at that letter
        //once we hit the last letter 'n', then hit++
        //once we "search" for a letter and its not there, indicated
        //by a 0, then we return the count
        int hits = 0;
        String balloon = "balloon";
        for(int i = 0; i < balloon.length; i++){
            if(map.get(balloon.charAt(i)) > 0){
                map.get(balloon.charAt(i))--;
                if(balloon.charAt(i) == 'n'){
                    hits++;
                }
            } else {
                return hits;
            }
        }
        return hits;
    }
}
