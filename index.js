import {getNumbers} from "./dice.js";
import Player from "./player.js";
import Table from "./table.js";

var initial_bet = 200
var player_list = []

player_list.push(new Player("Sam", initial_bet))
player_list.push(new Player("Adrija", initial_bet))

const table = new Table(10, player_list);

console.log(table.players)

for(let i = 0; i < 5; i++){
    var roll = getNumbers();
    console.log('Dice roll:' + roll);
}