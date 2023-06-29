import React, {useState} from 'react';
import Cell from './Cell';
import './Board.css';



const Board = () =>{


    const data = Array(9).fill(null);
    let xisNext = true;


    const [arr,setArr] = useState(data);

    const [colorchange ,setColor] = useState('X');

    const[bol, setBol] = useState(xisNext);


 function handleClick(i){
            const ar = arr.slice();
            if(calculateWinner(arr) || arr[i]){
                return;
            }
            ar[i]= bol ? 'X' : 'O' ;
            setArr(ar);
            setBol(!bol);
            console.log(arr);
            setColor(((bol) ? 'X' : 'O'));
            console.log(colorchange);
    }

    const resethandler = () =>{
        setArr(data);
        setBol(xisNext);

    }

    const winner = calculateWinner(arr);
    let status;
    
    if(winner){
        status = 'Winner: '  + winner;

    }
    else{
        status = 'Next player: ' + ((bol) ? 'X' : 'O');
        
    }

    return(
        <div className="game-table">
            <div className="curr-status">
                <div>{status}</div>
                <div><button className="btn" onClick={resethandler}>Restart</button></div>
            </div>
            <div className="table-row">
                <Cell vaule={arr[0]} onClick={() => handleClick(0)} bo={colorchange} />
                <Cell vaule={arr[1]} onClick={() => handleClick(1)} bo={colorchange} />
                <Cell vaule={arr[2]} onClick={() => handleClick(2)} bo={colorchange} />
            </div>
            <div className = "table-row">
                <Cell vaule={arr[3]} onClick={() => handleClick(3)} bo={colorchange} />
                <Cell vaule={arr[4]} onClick={() => handleClick(4)} bo={colorchange} />
                <Cell vaule={arr[5]} onClick={() => handleClick(5)} bo={colorchange} />
            </div>
            <div className = "table-row">
                <Cell vaule={arr[6]} onClick={() => handleClick(6)} bo={colorchange} />
                <Cell vaule={arr[7]} onClick={() => handleClick(7)} bo={colorchange} />
                <Cell vaule={arr[8]} onClick={() => handleClick(8)} bo={colorchange} />
                
            </div>

        </div>
    );
}

export default Board;

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }