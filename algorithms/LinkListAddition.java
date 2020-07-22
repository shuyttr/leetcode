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
        ListNode result = new ListNode();
        ListNode headResult = result;

        ListNode current1 = l1;
        ListNode current2 = l2;

        int carry = 0;
        int x;
        int y;
        do {
            if(current1 == null){
                x = 0;
            } else{
                x = current1.val;
            }

            if(current2 == null){
                y = 0;
            } else{
                y = current2.val;
            }
            int addition = (x + y) % 10;
            result.val = carry + addition;
            carry = (x + y) / 10;
            if(current1.next != null || current2.next != null){
                result.next = new ListNode();
                result = result.next;
            }
        } while(current1.next != null || current2.next != null);
        return headResult;
    }

    static class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }

        @Override
        public String toString() {
            StringBuilder stringBuilder = new StringBuilder();
            ListNode current = this;
            while(current != null){
                stringBuilder.append(current.val + " -> ");
            }
            return stringBuilder.toString();
        }
    }

    public static void main(String[] args) {
        LinkListAddition addition = new LinkListAddition();

        ListNode l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);

        ListNode l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);
        System.out.println(addition.addTwoNumbers(l1, l2));
    }
}