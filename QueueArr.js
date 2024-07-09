class QueueArr{
    
    constructor (){
        this.item = []
    }

    enqueue(element){
     
        this.item.push(element)
    }

    dequeue(){
        
        if(this.isEmpty())
            return " underflow "
        return this.item.shift()
    }

    isEmpty(){
        return this.item.length == 0;
    }

    peek(){

        if(this.isEmpty())
        return " no element is queue ";
        return this.item[0];
    }

    printQueue(){
        let str = ""
        for(var i=0;i<this.item.length;i++)
        str += this.item[i] +" ";
        return str;
    }
}

let queue = new QueueArr()

//console.log(queue.dequeue())
//console.log(queue.isEmpty())
queue.enqueue("RBE")
queue.enqueue("ABGY")
queue.enqueue("Sidharth")
queue.enqueue("12 rule")

console.log(queue.peek())

console.log(queue.dequeue())

console.log(queue.printQueue())




