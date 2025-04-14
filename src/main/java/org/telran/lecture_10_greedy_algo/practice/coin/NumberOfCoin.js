// Напишите программу, используя жадный алгоритм.
// Задача:
// Монетная система некоторого государства состоит из монет достоинством: 1, 2, 5, 10
// Требуется выдать сумму x, наименьшим возможным количеством монет.


function getChange(sum, coins) {
    let result = [];
    // You code
    return result
}

const coins = [1, 2, 5, 10];
const sum = 100;

let changeCoins = getChange(sum, coins);
console.log(changeCoins);

function getChange(sum, coins) {
    let result = [];
    // Сортируем монеты в порядке убывания, чтобы жадно выбирать самые крупные
    coins.sort((a, b) => b - a);

    for (const coin of coins) {
        while (sum >= coin) { 
            sum -= coin;      // sum = sum - coin
            result.push(coin);
        }
        if (sum === 0) {
            break;
        }
    }
    return result;
}

//console.log(changeCoins);
