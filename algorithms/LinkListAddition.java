/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class LinkListAddition {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode c1 = l1;
        ListNode c2 = l2;
        
        ListNode result = new ListNode();
        ListNode headResult = result; // return this
        
        int carry = 0;
        
        while(c1 != null || c2 != null){
            int c1_val = (c1 != null) ? c1.val : 0;
            int c2_val = (c2 != null) ? c2.val : 0;
            
            int sum = (c1_val + c2_val + carry) % 10;
            carry = (c1_val + c2_val + carry) / 10;
            
            result.next = new ListNode(sum);
            result = result.next;
            if(c1 != null){
                c1 = c1.next;
            }
            if(c2 != null){
                c2 = c2.next;
            }
        }
        
        if(carry > 0){
            result.next = new ListNode(1);
        }
        
        return headResult.next;
    }
}
