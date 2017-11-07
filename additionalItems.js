
//add new objects for database
const postcard = {
    "name": "Japan Xmas Card",
    "type": "Pop-up xmas postcard",
    "location": "Side of dresser"
    
}

const bookshelf = {
    "name": "Homemade",
    "type": "Wooden",
    "location": "Side of closet"
}

const lamp = {
    "name": "Unknown",
    "type": "Tall black floor lamp",
    "location": "Between dresser and side table"
}


//adding 3 new objects to the proper array at the beginning, middle, and end of the array.
misc.unshift(postcard)
furniture.splice(2, 0, [bookshelf]) // .splice(#startingPosition, #deleted, [#item, #item, #item])
electronics.push(lamp)
