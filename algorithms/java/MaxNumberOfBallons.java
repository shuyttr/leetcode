class Solution {
    public int maxNumberOfBalloons(String text) {
        HashMap<Character, Integer> map = new HashMap<>();
        for(int i = 0; i < text.length; i++){
            map.put(text.charAt(i), map.get(text.charAt(i)) + 1);
        }
        
    }
}