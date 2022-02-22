const fs = require("fs")

let x = 0
let y = 0
let f = "SOUTH"
const whiteListF = [
    'NORTH',
    'SOUTH',
    'WEST',
    'EAST'
]

async function report(){
    console.log(`X : ${x} | Y : ${y} | F : ${f}`)
}

async function place(inpX,inpY,inpF){
    if(!inpX) inpX=x
    if(!inpY) inpY=y
    if(!inpF) inpF=f


    if(Number(inpX) <= 5) x = inpX
    if(Number(inpY) <= 5) y = inpY
    if(whiteListF.includes(inpF.toUpperCase())) f = inpF

    if(Number(inpX) > 5) console.log("X is higher than 5")
    if(Number(inpY) > 5) console.log("Y is higher than 5")
    if(!whiteListF.includes(inpF.toUpperCase())) console.log("F is not valied")
}

async function move(){
    if(f == "SOUTH"){
        if(y - 1 > 0) y = y - 1
    }

    if(f == "WEST"){
        if(x - 1 >= 0) x = x -1
    }

    if(f == "EAST"){
        if(x + 1 <= 5) x = x + 1
    }

    if(f == "NORTH"){
        if(Y + 1 <= 5) y = y + 1
    }
}

async function runCommands(fileName){
    const commands = await fs.readFileSync(fileName, {encoding : 'utf8'}).split("\n")

    await commands.forEach(command => {
        const splitCommand = command.split(" ")
        if(splitCommand[0].toLowerCase() == "report") return report();
        if(splitCommand[0].toLowerCase() == "place") return place(splitCommand[1], splitCommand[2], splitCommand[3]);
        if(splitCommand[0].toLowerCase() == "move") return move();

    })
}

runCommands("./command.txt")
