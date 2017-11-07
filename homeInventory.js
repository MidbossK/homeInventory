
// 10 data entries for database

const queenBed = {
    "name": "Unknown",
    "type": "Queen size spring",
    "location": "By the window"
}

const desk = {
    "name": "Homemade",
    "type": "Cedar writing desk ",
    "location": "Closet"

}

const couch = {
    "name": "Ashley's",
    "type": "3 cushion full cloth couch",
    "location": "Beside the door"

}

const sideTable = {
    "name": "Ashley's",
    "type": "Cedar",
    "location": "Beside the bed",
}

const miniFridge = {
    "name": "Juggernog Fridge",
    "type": "12 can size fridge",
    "location": "On top of side table"
}

const tele = {
    "name":"TV",
    "type": "42 inch flatscreen",
    "location": "Across from couch"
}

const dresser = {
    "name": "Homemade",
    "type": "3 drawer",
    "location": "In corner",

}

const coatRack = {
    "name": "Handmade",
    "type": "Wall hanging coat rack shelf",
    "location": "Above couch on wall"

}


const ps4 = {
    "name": "Playstation 4",
    "type": "Game console",
    "location": "Beside TV"
}


const jumpRope = {
    "name": "Unknown",
    "type": "Black heavy plastic",
    "location": "Hanging on wall next to dresser"
}

//Array of home objects
let furniture = [queenBed, dresser, sideTable, couch, desk]
let electronics = [tele, ps4, miniFridge]
let misc = [jumpRope, coatRack]

//Put here the database keys
let homeInventory = {
    "furniture": furniture,
    "electronics": electronics,
    "misc": misc

}

//Convert data into a string: Why does it have to be stored as a string?
const homeInventoryString = JSON.stringify(homeInventory)
localStorage.setItem("homeInventory",homeInventoryString)

//Recall data values from storage: Recalling values?
const storedInventory = localStorage.getItem("homeInventory")
homeInventory = JSON.parse(storedInventory)


//combined parse syntax:   Why is this wrong?
//const storedInventory = localStorage.getItem("homeInventory")         (JSON.parse(storedInventory)))





