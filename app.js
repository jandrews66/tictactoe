const createPlayer = (name, marker) => {
    return {name, marker};
}

const playerOne = createPlayer("Joe", "x")
const playerTwo = createPlayer("Computer", "o")
let activePlayer = playerOne;
const squares = document.getElementsByClassName("squares");


const gameBoard = (function(){
    boardArray = Array.apply(null, Array(9))
    
    const setActivePlayer = () => {
        if (activePlayer === playerOne){
            activePlayer = playerTwo
        } else {
            activePlayer = playerOne
        }
};


    for (let i = 0; i < squares.length; i++){
        squares[i].addEventListener('click', (e) => {
            if (e.target.innerHTML === "") {
                e.target.innerHTML = activePlayer.marker;
                boardArray.splice([i], 1, activePlayer.marker);
                checkWin(activePlayer.marker)
                setActivePlayer()
            }
        })
    }
})();

const gameController = (() => {

})();





const checkWin = function (marker) {

    const reset = function() {
        boardArray = Array.apply(null, Array(9))
        for (let square of squares){
            square.innerHTML = "";
        }
    }

    const checkArray = function() {
        return boardArray.reduce(function(q, e, i) {
            if (e === marker){
            q.push(i);
        }
            return q;
        }, [])
        
    }

    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let comb of combs){
        stringA = comb.join();
        stringB = checkArray(marker).join();
        stringC = boardArray.join("");

       if (stringB.includes(stringA)){
        console.log(marker + " wins")
        reset()

       } else if (stringC.length === 9){
        console.log("draw")
        reset()

       }
 
    }
        
 }


