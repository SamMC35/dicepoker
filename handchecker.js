import Hands from "./handsenum.js";

function checkFullHouse(dice_list){
    const countMap = new Map();

    dice_list.forEach(num => {
        if(countMap.has(num)){
            countMap.set(num, countMap.get(num) + 1);
        } else{
            countMap.set(num, 1);
        }
    });

    const values = Array.from(countMap.values());

    return (values.includes(3) && values.includes(2));
}

function checkStraight(dice_list){

    for(let i = 1; i < dice_list.length; i++){
        if(dice_list[i] - dice_list[i-1] != 1){
            return false;
        }
    }

    return true;
}

function checkFiveOfAKind(dice_list){
    return dice_list.every(num => num === dice_list[0]);
}

function checkFourOfAKind(dice_list){
    const countMap = new Map();

    dice_list.forEach(num => {
        if(countMap.has(num)){
            countMap.set(num, countMap.get(num) + 1);
        } else{
            countMap.set(num, 1);
        }
    });

    const values = Array.from(countMap.values());

    return (values.includes(4));
}

function checkThreeOfAKind(dice_list){
    var no_pair = 1;

    var current_num = dice_list[0];

    for(let i = 1; i < dice_list.length;){
        if(current_num == dice_list[i]){
            no_pair += 1;

            i++;

            if(no_pair == 3){
                return true;
            }
        } else{
            current_num = dice_list[i]
            no_pair = 1;
        }
    }
    return false;
}

function checkPairOrBust(dice_list){
    var pair_no = 0;

    var current_num = dice_list[0];

    for(let i = 1; i < dice_list.length;){
        if(current_num == dice_list[i]){
            pair_no += 1;
            current_num = dice_list[i+1]
            i += 2;
        } else {
            current_num = dice_list[i]
            i++;
        }
    }

    if(pair_no == 2){
        return Hands.TWO_PAIR;
    } else if (pair_no == 1){
        return Hands.ONE_PAIR;
    } else {
        return Hands.BUST
    }
}

export function checkhand(dice_list){

    dice_list.sort();

    //check five of a kind
    if(checkFiveOfAKind(dice_list)){
        return Hands.FIVE_OF_A_KIND;
    }

    if(checkFourOfAKind(dice_list)){
        return Hands.FOUR_OF_A_KIND;
    }

    //check four of a kind

    //check full house
    if(checkFullHouse(dice_list)){
        return Hands.FULL_HOUSE;
    }

    //check straight
    if(checkStraight(dice_list)){
        return Hands.STRAIGHT;
    }
    //check three of a kind

    if(checkThreeOfAKind(dice_list)){
        return Hands.THREE_OF_A_KIND;
    }

    //check two pair
    return checkPairOrBust(dice_list);
    //check highest 
}