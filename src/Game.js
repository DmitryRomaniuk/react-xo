class Game {
  constructor(initArr, symbol){
    this.arr = [...initArr]
    this.O = symbol
  }

  getBestAIStep(){
    let firstRow =  [0,1,2];
    let secondRow = [3,4,5];
    let thirdRow =  [6,7,8];
    let firstCol =  [0,3,6];
    let secondCol = [1,4,7];
    let thirdCol =  [2,5,8];
    let line159 = [0,4,8];
    let line357 = [2,4,6];
    let allArr = [firstRow,secondRow,thirdRow,firstCol,secondCol,thirdCol,line159,line357]
    let arrSort = [].concat(this.arr).sort();
    let zeroValPlayers = arrSort[0];
    let player1 = arrSort[8];
    let player2 = arrSort.map(elem => {
      if (elem !== zeroValPlayers && elem !==player1) {return elem}
      return false
    }).filter(elem => {return elem})[0] || 'first step in the game';
    //here first output from function getBestAIStep()
    if (player2 === 'first step in the game') {return (this.arr[4])? 0:4}
    if (player1 === this.O) {[player1,player2]=[player2,player1]}
    return allArr.map(elem => {
      let countP1, countP2, countZeroCell, lastZero;
      elem.forEach(item => {
        if (this.arr[item] === player1) {countP1++}
        if (this.arr[item] === player2) {countP2++}
        if (!this.arr[item]) {countZeroCell++; lastZero = item}
      });
      if ((countP1 === 2 || countP2 === 2) && countZeroCell === 1) {
        return lastZero
      } else {
        return undefined
      }
    })
  }

}

export default Game;