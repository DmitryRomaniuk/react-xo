class Game {
  constructor(initArr){
    this.arr = [...initArr]
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
    
  }

}