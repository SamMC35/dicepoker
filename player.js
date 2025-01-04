class Player{
    constructor(name, initial_bet, dice_roll, hand){
        this.cash = initial_bet;
        this.name = name;
        this.dice_roll = dice_roll;
        this.hand = hand;
    }
}

export default Player;