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



for(let i = 0; i < 5; i++){
    console.log(table.players)

    player_list[0].dice_roll = getNumbers();
    player_list[1].dice_roll = getNumbers();

    var pot = getBet()

    var winner = player_list.reduce((max, player) => player.dice_roll > max.dice_roll ? player : max)

    console.log('Winner is : ' + winner.name + ' ' + winner.dice_roll)
    winner.cash += pot;
}

var dice_list = [4,1,3,2,6];

console.log(checkhand(dice_list));