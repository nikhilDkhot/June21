/* A Queue works on the FIFO(First in First Out) principle. Hence, it performs
two basic operations which are the addition of elements at the end of the 
queue and the removal of elements from the front of the queue 
enqueue : To add elements at the end of the queue.
dequeue: To remove an element from the front of the queue.
peek: To get the front element without removing it.
isEmpty: To check whether an element is present in the queue or not.
printQueue: To print the elements present in the queue*/
class Queue1{
    constructor (){
        this.item = {}
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    enqueue(element){
        this.item[this.backIndex] = element
        this.backIndex++
        return element + " inserted" 
    }

    dequeue(){
        const items = this.item[this.frontIndex]
        delete this.item[this.frontIndex]
        this.frontIndex++
        return items
    }

    peek(){
        return this.item[this.frontIndex]
    }

    get printQueue(){
        return this.item;
    }

    }

    let queue1 = new Queue1()

    console.log(queue1.enqueue("tukaram"))
    console.log(queue1.enqueue("gyaneshvar"))
    console.log(queue1.enqueue("namdev"))
    console.log(queue1.enqueue("kabir"))
    console.log(queue1.enqueue("mira"))
    console.log(queue1.dequeue())
    console.log(queue1.peek())
    let str = queue1.printQueue
    console.log(str)

/* Enqueuing an element: O(1)
Dequeuing an element: O(n) (as all the remaining elements need to be shifted one position to 
the left)
Accessing the front of the queue: O(1) */




    