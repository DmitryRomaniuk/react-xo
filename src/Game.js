class Game {
    constructor(initArr, symbol) {
        this.arr = [...initArr];
        this.O = symbol
    }

    gameIsOver() {
        let firstRow = [0, 1, 2];
        let secondRow = [3, 4, 5];
        let thirdRow = [6, 7, 8];
        let firstCol = [0, 3, 6];
        let secondCol = [1, 4, 7];
        let thirdCol = [2, 5, 8];
        let line159 = [0, 4, 8];
        let line357 = [2, 4, 6];
        let allArr = [firstRow, secondRow, thirdRow, firstCol, secondCol, thirdCol, line159, line357];
        let arrSort = [].concat(this.arr).sort();
        let zeroValPlayers = arrSort[0];
        let player1 = arrSort[8];
        let player2 = arrSort.map(elem => {
                if (elem !== zeroValPlayers && elem !== player1) {
                    return elem
                }
                return false
            }).filter(elem => {
                return elem
            })[0] || 'first step in the game';
        if (player1 === this.O) {
            [player1, player2] = [player2, player1]
        }
        let returnedArr = allArr.map(elem => {
            let countP1 = 0, countP2 = 0;
            elem.forEach(item => {
                if (this.arr[item] === player1 && player1 !== null) {
                    countP1++
                }
                if (this.arr[item] === player2 && player2 !== null) {
                    countP2++
                }
            });
            if (countP1 === 3 || countP2 === 3) {
                return {arr: elem, player: `player${(countP1 === 3) ? 1 : 2}`}
            } else {
                return undefined
            }
        }).filter(elem => {
            return (elem) ? elem : false
        });
        let allCellFilled = arrSort.every(x => {
            return (x)
        });
        let endGame = (allCellFilled || returnedArr.length);
        let playerWin = (returnedArr.length) ? returnedArr[0].player : undefined;
        let line = (returnedArr.length) ? returnedArr[0].arr : undefined;
        return {endGame: endGame, playerWin: playerWin, line: line}
    }

    randomClick() {
        let randomArray = this.arr.map((elem, index) => {
            if (elem) {
                return index
            }
            return undefined
        }).filter(elem => {
            return elem
        });
        let randomValue = randomArray[Math.floor(Math.random() * randomArray.length)];
        if (randomValue) return [randomValue]
    }

    getBestAIStep() {
        let firstRow = [0, 1, 2];
        let secondRow = [3, 4, 5];
        let thirdRow = [6, 7, 8];
        let firstCol = [0, 3, 6];
        let secondCol = [1, 4, 7];
        let thirdCol = [2, 5, 8];
        let line159 = [0, 4, 8];
        let line357 = [2, 4, 6];
        let allArr = [firstRow, secondRow, thirdRow, firstCol, secondCol, thirdCol, line159, line357];
        let arrSort = [].concat(this.arr).sort();
        let zeroValPlayers = arrSort[0];
        let player1 = arrSort[8];
        let player2 = arrSort.map(elem => {
                if (elem !== zeroValPlayers && elem !== player1) {
                    return elem
                }
                return false
            }).filter(elem => {
                return elem
            })[0] || 'first step in the game';
        //here first output from function getBestAIStep()
        if (player2 === 'first step in the game') {
            return (this.arr[4]) ? [0] : [4]
        }
        if (player1 === this.O) {
            [player1, player2] = [player2, player1]
        }
        let returnedArr = allArr.map(elem => {
            let countP1 = 0, countP2 = 0, countZeroCell = 0, lastZero;
            elem.forEach(item => {
                if (this.arr[item] === player1) {
                    countP1++
                }
                if (this.arr[item] === player2) {
                    countP2++
                }
                if (!this.arr[item]) {
                    countZeroCell++;
                    lastZero = item
                }
            });
            if ((countP1 === 2 || countP2 === 2) && countZeroCell === 1) {
                return lastZero
            } else {
                return undefined
            }
        }).filter(elem => {
            return (elem) ? elem : false
        });
        if (!returnedArr.length) {
            returnedArr = allArr.map(elem => {
                let countP2 = 0, countZeroCell = 0, lastZero;
                elem.forEach(item => {
                    if (this.arr[item] === player2) {
                        countP2++
                    }
                    if (!this.arr[item]) {
                        countZeroCell++;
                        lastZero = item
                    }
                });
                if (countP2 === 1 && countZeroCell === 2) {
                    return lastZero
                } else {
                    return undefined
                }
            }).filter(elem => {
                return (elem) ? elem : false
            })
        }
        return (returnedArr.length > 0) ? returnedArr : this.randomClick()
    }

}

export default Game;