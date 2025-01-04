import {getNumbers} from "./dice.js";
import Player from "./player.js";
import Table from "./table.js";
import { checkhand } from "./handchecker.js";


var initial_bet = 200

var bet = 20
var player_list = []

function getBet(){
    var pot = 0;
    for(let i = 0; i < player_list.length; i++){
        player_list[i].cash -= bet;
        pot += bet;
    }

    return pot;
}

player_list.push(new Player("Sam", initial_bet, 0))
player_list.push(new Player("Adrija", initial_bet, 0))

const table = new Table(10, player_list);

function createDiceArray(){
    var dice_list = [];

    for(let i = 0; i < 5; i++){
        dice_list.push(getNumbers())
    }

    return dice_list;
}


   
for(let i = 0; i < player_list.length; i++){
    player_list[i].dice_roll = createDiceArray();
    player_list[i].hand = checkhand(player_list[i].dice_roll)
}

var pot = getBet()
console.log(table.players)

var winner = player_list.reduce((max, player) => player.hand[1] > max.hand[1] ? player : max)

console.log('Winner is : ' + winner.name + ' ' + winner.dice_roll)
winner.cash += pot;


// var dice_list = [1,1,1,1,1];

// console.log(checkhand(dice_list));

// var dice_list = [1,1,1,1,4];

// console.log(checkhand(dice_list));