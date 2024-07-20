class abc{
    constructor(){
        this.a = 10;
    }
    add(){
        return console.log("add")
        //console.log(this.b)

    }
    add1(){
        console.log(this.add())
        //console.log(this.b)

    }
    //b = 20
}

abc.prototype.this.b = 20;

let obj = new abc()
//console.log(obj)
//console.log(abc)
//obj.add()
//console.log(obj.add())
obj.add1
