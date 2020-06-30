const readline = require("readline");
const items = require("./item.json");
var validator = require("validator")

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let total = 0;

console.log("Hey there, We have the following items in our shop.\n")
  
function q1(){
    items.forEach(function(item){
        console.log(item.id+") "+ item.name + "-" + item.price + " rupees/item")
    });
    reader.question("\nWhat do you want to purchase today?", (id) => {
        if(validator.isNumeric(id) && id>0 && id<=items.length){
            q2(id);
        }else{
            console.log("Invalid input, please try again with correct value");
            q1();
        }
    })
}
function q2(itemid){
    reader.question("How many?",(quantity) =>{
        if(validator.isNumeric(quantity) && (quantity>0 && quantity<=100)){
            q3(itemid,quantity);
        }else{
            console.log("Invalid quantity!");
            q2(itemid);
        }
    })
}
function q3(itemid,qty){
    reader.question("Anything else ?\n",(input) =>{
        total = total + (items[itemid-1]['price']*qty);
        if(input == "Yes" || input == "yes" || input == "YES" || input == "y" || input == "Y"){
            q1();
        }else{
            console.log("Please wait, Calculating bill...")
            console.log("Total bill is :",total,"rupees.")
            reader.close();
        }
    })
}
q1();