//https://github.com/urnisha19/Assignment-3

//----Problem 1: kilometerToMeter 
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Distance can not be negative value!";
    }

    var meter = 1000 * kilometer;
    return meter;
}
console.log(kilometerToMeter(10)); //calling the function kilometerToMeter() and gave one parameter 10(in kilometer) to covert and show it in meter.
//----Problem 1 End----



//----Problem 2: budgetCalculator
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Please, enter positive values!";
    }

    var totalBudget = watch * 50 + phone * 100 + laptop * 500;
    return totalBudget;
}
console.log(budgetCalculator(2, 1, 1)); //calling the function budgetCalculator() and gave thre parameter 2,1,1 as the numbers of watch,phone and laptop respectively to calculte and show the total budget.
//----Problem 2 End----



//----Problem 3: hotelCost 
function hotelCost(days) {
    if (days < 0) {
        return "Please, enter positive values!";
    }

    var cost = 0;
    if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var firstTermCost = 10 * 100;
        var remainingDays = days - 10;
        var secondTermCost = remainingDays * 80;
        cost = firstTermCost + secondTermCost;
    }
    else {
        var firstTermCost = 10 * 100;
        var secondTermCost = 10 * 80;
        var remainingDays = days - 20;
        var thirdTermCost = remainingDays * 50;
        cost = firstTermCost + secondTermCost + thirdTermCost;
    }
    return cost;
}
console.log(hotelCost(21)); //calling the function hotelCost() and gave one parameter 21(days) to calculate and show the hotel cost.
//----Problem 3 End----



//----Problem 4: megaFriend
function megaFriend(friends) {
    if (friends.length == 0) {
        return "Array is empty!";
    }

    var highestLenght = 0;
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > highestLenght) {
            var highestLenght = friends[i].length;
            var longest = friends[i];
        }
    }
    return longest;
}
console.log(megaFriend(["Lima", "Eva", "Puja", "Susmita", "Jannat", "Marwa"])); //calling the function  megaFriend() and gave an array as the parameter to find the longest string of the array
//----Problem 4 End----
