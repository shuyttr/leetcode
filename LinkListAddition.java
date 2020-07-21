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
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int multiplier = 0;
        int sum = 0;
        while(l1 != null){
            sum += l1.val * Math.pow(10, multiplier++);
            l1 = l1.next;
        }
        multiplier = 0;
        while(l2 != null){
            sum += l2.val * Math.pow(10, multiplier++);
            l2 = l2.next;
        }
        ListNode result = new ListNode(sum % 10);
        ListNode head = result;
        sum /= 10;
        while(sum / 10 != 0 || sum > 0){
            int value = sum % 10;
            result.next = new ListNode(value);
            result = result.next;
            sum = sum / 10;
        }
        return head;
    }
}