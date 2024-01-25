import {useState} from 'react';
import './Style.css';
const Calculator=()=>{
  let [input,setInput]=useState("");
  function data(a){
 setInput(input+a)
  }
  const calculateData=()=>{
    let y=eval(input);
    setInput(y);
  }
  const clearr=()=>{
    let x=input.slice(0,-1)
    setInput(x)
  }
  return(
    <>
    <div className="main">
    <div className="display">{input}</div>
    <div className="buttons">
    <button onClick={()=>{
      data("1")
    }}>1</button><button onClick={()=>{
      data("2")
    }}>2</button><button onClick={()=>{
      data("3")
    }}>3</button><button onClick={()=>{
      data("*")
    }}>*</button>
    
        <button onClick={()=>{
      data("4")
    }}>4</button><button onClick={()=>{
      data("5")
    }}>5</button><button onClick={()=>{
      data("6")
    }}>6</button><button onClick={()=>{
      data("/")
    }}>/</button>
        
    <button onClick={()=>{
      data("7")
    }}>7</button><button onClick={()=>{
      data("8")
    }}>8</button><button onClick={()=>{
      data("9")
    }}>9</button><button onClick={()=>{
      data("-")
    }}>-</button>
    
    <button onClick={()=>{
      data("0")
    }}>0</button><button onClick={()=>{
      data("00")
    }}>00</button><button onClick={
      ()=>{
        clearr();
      }}>C</button><button onClick={()=>{
      data('+')
    }}>+</button>
    <button className="result"onClick={()=>{
      calculateData();
    }}>=</button><button className="clear" onClick={()=>{setInput("")}}>AC</button>
    </div>
    </div>
    </>
    )
}
export default Calculator;