import React, {useEffect, useState, useCallback, useMemo} from 'react';
import ChildCompo from './ChildCompo';

const Comp = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);
  const [squareNum, setsquareNum] = useState(0);

  console.log("Comp component rendered")
  useEffect(() => {
    // console.log("UseEffect called")
    return () => {
      // console.log("UseEffect cleanup called")
    }
  }, [name]);

  const square = useMemo(() => {
    console.log("Comp useMemo called")
    return number * number;
  }, [number]) 
  
  const changeNameHandler = (e) => {
    // setName(e.target.value);
    setNumber(parseInt(e.target.value));
  }

  const onClickHandler = (e, age) => {
    setName(number + 1);
    setsquareNum(square);
  }

  
  const showList = () => {
    return [number, number + 5, number + 10];
  };
  
  const printName = useCallback( () => {
    return 'Laiq'
  },[])

  return (
    <div>
      <h5>{squareNum}</h5>
      <input value={number} onChange={changeNameHandler}></input>
      <button onClick={(e) => onClickHandler(e,20)}> Change Name</button>
      <ChildCompo listMethod={showList} printName = {printName}/>
    </div>
  )
}

export default Comp


function throttle(fn, delay){
  let inThrttle;

  return function(){
    let context = this;
    let args = arguments;

    if(!inThrttle){
      fn.apply(context, args);
      inThrttle = true;
      setTimeout(function(){
        inThrttle = false;
      }, delay)
    }

    
  }
}

function print(){
  console.log("printing")
}

var run = throttle(print, 2000)