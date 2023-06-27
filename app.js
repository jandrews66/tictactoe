const createPlayer = (name, marker) => {
    return {name, marker};
}


const squares = document.getElementsByClassName("squares");


const form = document.getElementById('form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    gameBoard(player_name.value);
    form.reset();

})


const gameBoard = function(playerName){
    const playerOne = createPlayer(playerName, "x")
    const playerTwo = createPlayer("Computer", "o")
    boardArray = Array.apply(null, Array(9))
    
//     const setActivePlayer = () => {
//         if (activePlayer === playerOne){
//             activePlayer = playerTwo
//         } else {
//             activePlayer = playerOne
//         }
// };


    for (let i = 0; i < squares.length; i++){
        squares[i].addEventListener('click', (e) => {
            if (e.target.innerHTML === "") {
                boardArray.splice([i], 1, playerOne.marker);
                displayArray()
                checkWin(playerOne)
                computersTurn();
                //setActivePlayer()
            }
        })
    }

    const displayArray = function (){
        for (let i = 0; i < squares.length; i++){
            if (boardArray[i] !== undefined){
                squares[i].innerHTML = boardArray[i];
            }
        }
    }

    const computersTurn = function (){
        const getRanNum = () => {
            return Math.floor(Math.random() * 8);
        }
        let x = getRanNum()
        if (boardArray[x] === undefined){
        boardArray.splice([x], 1, playerTwo.marker);
        checkWin(playerTwo)

        } else {computersTurn()}
        displayArray();
    }
 
};

const gameController = (() => {

})();





const checkWin = function (player) {
    let marker = player.marker
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
        console.log(player.name + " wins")
        reset()

       } else if (stringC.length === 9){
        console.log("draw")
        reset()

       } 
 
    }
        
 }


