import SinglyLinkedList from "../linkedlist";
import findMiddle from "../find-linkedlist-middle";
import getFrequency from "../count-frequency";
import isCircular from "../check-if-circular";
import toCircular from "../../single-to-circular-list";


describe('Linkedlist Challenges', () => {

    let linkedlist; 
    
    beforeAll(() => {
    
        linkedlist = new SinglyLinkedList();
        linkedlist.append(1);
        linkedlist.append(2);
        linkedlist.append(3);
        linkedlist.append(4);
        linkedlist.append(5);
    
        return linkedlist;
    })
    
    test('findMiddle() should return the middle element of a linkedlist', () => {
    
        expect(findMiddle(linkedlist.head)).toBe(3);
    })

    test('getFrequency() should return the count of a key', () => {
        
        expect(getFrequency(linkedlist.head, 6)).toBe(0);
    })

    test('isCircular() should return a boolean based on the condition that the list is circular', () => {

        expect(isCircular(linkedlist.head)).toBe(false);
    })

    test('toCircular() converts a singly linked list to a circular list', () => {
       
        expect(isCircular(toCircular(linkedlist.head))).toBe(true);
    })

})
