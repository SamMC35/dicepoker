class Table{
    constructor(bet, player = []){
        this.bet = bet;
        this.players = player
    }

    getBet(){
        return this.bet;
    }

    setBet(bet){
        this.bet = bet;
    }

    getPlayers(){
        return this.players;
    }
}

export default Table;