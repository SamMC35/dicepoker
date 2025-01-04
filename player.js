class Player{
    constructor(name, initial_bet, dice_roll){
        this.cash = initial_bet;
        this.name = name;
        this.dice_roll = dice_roll;
    }
}

export default Player;