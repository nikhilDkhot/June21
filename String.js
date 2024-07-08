//slice method 
let n = "living in present is truth"
let r = n.slice(0,6)
let v = n.slice(7,17)
let t = n.slice(18,n.length)
//console.log(r)
//console.log(t)
//console.log(v)

let osho ="awareness, love, godness"

let osho1 = osho.substring(0,9)
//console.log(osho1)

let name1 = "sarthak, arush, nikhil "
//console.log(name1)

let name2 = name1.replace("nikhil","manav")

//console.log(name2)

let name3 = "sarthak, arush, nikhil,nikhil "

let name4 = name3.replaceAll("nikhil","manav")

//console.log(name4)

let name5 = "sarthak arush manav"

let name6 = name5.toUpperCase()

//console.log(name6)

let player = "VIRAT, ROHIT, SURYAKUMAR, BUMRAH"
let player1 = player.toLowerCase();
//console.log(player1) 

let statement = 'Sarthak    is    boy       '
let statement2 = "Sarthak is brother of Arush."

let statement3 = statement.concat(statement2)

//console.log(statement3)

let statement4 = '     Sarthak    is    boy       '

let statement5 = statement4.trim()

let statement6 = statement4.trimStart()

//console.log(statement4.length)

//console.log(statement5.length)

//console.log(statement6)

let statement7 = statement4.trimEnd()

//console.log(statement7)

let statement8 = "freedom"

let statement9 = statement8.padStart(15,"fromself")

//console.log(statement9)

let statement10 = "Joy"

let statement11 = statement10.padEnd(15,"free")

//console.log(statement11)

/* for(let i=0;i<osho.length-1;i++){
    
    console.log(osho.charAt(i))
} */


 /* for(let i=0;i<osho.length-1;i++){
    
    console.log(osho.charCodeAt(i))
} */ 

console.log(player.split(","))
console.log(player)









