/* Implementation of a stack in JavaScript involves creating a data structure
that follows the Last-In-First-Out (LIFO) principle, where elements are added
and removed from the same end. We use stacks to manage function calls, 
undo functionality, and parse algorithms efficiently in JavaScript 
applications.*/
class Stack{
    constructor(){
        
        this.item =[]
    }

    push(elements){

        this.item.push(elements)

    }

    pop(){
        if(this.item.length==0)
        return "underflow"
        return this.item.pop()
    }

    isEmpty(){
        return this.item.length==0;

    }

    printstack(){

        let str = "";
        for(let i = 0;i < this.item.length; i++)
            str += this.item[i] + " ";
        return str;
        
    }
}

let stack = new Stack();

stack.push("sarthak")
stack.push("arush")
stack.push("manav")

//console.log(stack.pop())

console.log(stack.printstack());
//console.log(stack.item)
//console.log(stack.isEmpty())

