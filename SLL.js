/* For data insertion and deletion, arrays can be expensive. Linked list, 
on the other hand, has dynamic size and makes insertion and deletion so
easy. One disadvantage though, unlike arrays, elements in linked list 
doesn’t have indexes in order, which doesn’t allow random access */
class Node{
    constructor(element){
        this.next = null;
        this.element = element
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(element){
        let node = new Node(element);

        let curr;
        
        if(this.head==null){
            this.head = node;
        }
        else{
            curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++
    }

    removeFrom(index){
        if(index < 0 ||  index >= this.size){
            return console.log("enter valid no")
        }

        else{
            let current, prev , it = 0;
            current = this.head;
            prev = current;
            
            if(index == 0){
                this.head = current.next;
            }
            else{
                while(it<index){
                    it++;
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
            }
            this.size--;

            return current.element;
        }
    }

    removeElement(element){
        let curr = this.head;
        let prev = null;
        while(curr != null){
            if(curr.element === element){
                if(prev == null){
                    this.head = curr.next;
                }
                else{
                    prev.next = curr.next;
                }
                this.size--;
                return curr.element;
            }
            prev = curr;
            curr = curr.next;
        } 
        return -1;
    }

    indexOf(element){
        let count = 0;
        let current = this.head;
        while(current != null){
            if(current.element === element){
                return count;
            }
            count++;
            current = current.next;
        }
        return -1;
    }

    isEmpty(){
        return this.size == 0;
    }

    sizeOfList(){
        console.log(this.size)
    }

    printList(){
        let curr = this.head;
        let str= "";
        while(curr){
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);

    }

}

let ll = new LinkedList();

//console.log(ll.isEmpty());

ll.add(33);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

ll.printList();

console.log("is element removed ? " + ll.removeElement(50));

ll.printList();

console.log("Index of 40 " + ll.indexOf(40));

console.log("is List Empty ? " + ll.isEmpty());

console.log(ll.removeFrom(3));

ll.printList();
