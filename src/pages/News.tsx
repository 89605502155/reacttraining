import { Button } from "react-bootstrap";
import React, {useState} from 'react';

function News() {
    const [count, setCount]=useState(0);
    const increment = () =>{
        setCount(count+1)
    }
    const decrement = () =>{
        setCount(count>0 ? count-1 : count+1)
    }
    return(
        <div>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        <span>{count}</span>
        </div>
    );
};

export {News};
