import './App.css';
import React , {useState} from 'react'
import KeyPad from './components/KeyPad';
import Result from './components/Result';

const App = () => {

const [result , setResult] = useState('');

const getInputHandler = (input) => {
    if(input === '='){
      let current = result;
      let answer = eval(current);
      let string = answer.toString();
      setResult(string);
    }
    else if (input === 'C'){
     let current = result;
     let removed = current.slice(0, -1);
     setResult(removed);
     console.log(removed);
    }
    else if (input === 'CE'){
      setResult('')
    }
    else{
      let prevResult = result;
      let newResult = prevResult + input;
      setResult(newResult);
    }
  } 

  return (
    <div className="App">
      <div className='app__container'>
        <Result result={result}/>
        <KeyPad input={getInputHandler}/>
      </div>
    </div>
  );
}

export default App;
