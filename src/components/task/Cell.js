import React, {useState} from 'react';
import './Cell.css';

const Cell = (props) =>{

    const [mark ,setMark] = useState(props.vaule);

    

    // const display = () =>{
    //     console.log("click");
    //     setMark('X');
    //     console.log(props.vaule);
    // }

    return(
        console.log("bo"),
        console.log(props.bo),
        <button className={props.bo == 'X' ? "cell x" : "cell o" } onClick={props.onClick}  >{props.vaule}</button>
    )
}

export default Cell;