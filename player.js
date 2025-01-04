class Player{
    constructor(name, initial_bet){
        this.cash = initial_bet;
        this.name = name;
    }

    getName(){
        return this.name;
    }

    getCash(){
        return this.cash;
    }
}

export default Player;