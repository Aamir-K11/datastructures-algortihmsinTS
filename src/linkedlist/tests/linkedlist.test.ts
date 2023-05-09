import SinglyLinkedList from "../linkedlist";
import findMiddle from "../find-linkedlist-middle";
import getFrequency from "../count-frequency";


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

})
