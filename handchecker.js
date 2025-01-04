function checkOnePair(dice_list){
    dice_list.sort();

    var current_num = dice_list[0];

    for(let i = 1; i < dice_list.length; i++){
        if(current_num == dice_list[i]){
            return true;
        } else {
            current_num = dice_list[i]
        }
    }
    return false;
}

export function checkhand(dice_list){
    //check five of a kind

    //check four of a kind

    //check full house

    //check straight

    //check three of a kind

    //check two pair

    //check one pair
    if(checkOnePair(dice_list)){
        return "one pair";
    }
    //check highest 
}