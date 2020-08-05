class Solution {
    public int maxNumberOfBalloons(String text) {
        HashMap<Character, Integer> map = new HashMap<>();
        for(int i = 0; i < text.length(); i++){
            if("balloons".indexOf(text.charAt(i)) > -1){
                if(map.get(text.charAt(i)) != null){
                    map.put(text.charAt(i), map.get(text.charAt(i)) + 1);
                } else {
                    map.put(text.charAt(i), 1);
                }
            }
        }
        //search thru map and decrease the count at that letter
        //once we hit the last letter 'n', then hit++
        //once we "search" for a letter and its not there, indicated
        //by a 0, then we return the count
        int hits = 0;
        String balloon = "balloon";
        int j = text.length();
            for(int i = 0; i < balloon.length(); i++){
                if(map.containsKey(balloon.charAt(i))){
                    map.put(balloon.charAt(i), map.get(balloon.charAt(i)) - 1);
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
