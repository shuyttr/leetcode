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
      
        ListNode resultLinkedList = new ListNode();
        ListNode headResult = resultLinkedList;
        ListNode currentL1 = l1;
        ListNode currentL2 = l2;

        int carryOver = 0;

        while (currentL1 != null || currentL2 != null){
            int x, y = 0
            if (currentL1 == null){
                x = 0;
            } else{
                x = currentL1.val;
            }

            if(currentL2 == null){
                y = 0;
            } else{
                y = currentL2.val;
            }

            int newValue = (x + y) % 10;
            resultLinkedList.val = newValue + carryOver;
            if(currentL1.next != null && currentL2.next != null) resultLinkedList.next = new ListNode();
            resultLinkedList = resultLinkedList.next;
            carryOver = (x + y) / 10;
            currentL1 = currentL1.next;
            currentL2 = currentL2.next;
        }
    }
}