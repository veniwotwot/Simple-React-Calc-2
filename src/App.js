import React, { useState } from 'react';
import Wrapper from './components/Wrapper';
import NumberOutput from './components/NumberOutput';
import Button from './components/Button';
import { infixToPostfix } from './util/shuntingYard.js';
import { calculate } from './util/postfixCalculator.js';

const App = () => {

  let [calc, setCalc] = useState({
    res: ''
  })

  function append(e) {
    //console.log(`entered append func ${calc.res.length}`);
    e.preventDefault();
    let a = e.target.innerHTML;

    //console.log(`append ${a}`);
    setCalc({ res: (calc.res + a) });

  }

  function clear() {
    setCalc({ res: "" });
  }

  function parse(e) {
    //needs to handle all types of operations from (1+1) to (2+2+2+2+2+2) to (2*3/-2+7)
    //best done by making tokens from left to right of string
    //then performing operations on each token pair
    //before outputting the final result [stored in left token]
    e.preventDefault();

    let fullString = calc.res;
    console.log(`---PARSE: this is the fullstring: ${fullString}`);

    var postfix = infixToPostfix(fullString);
    console.log(`---PARSE: this is the postfix: ${postfix}`);

    var result = calculate(postfix);
    console.log(`---PARSE: the result is ${result}`);

    setCalc({ res: result });
  }

  return (
    <Wrapper>
      <NumberOutput id_input="result-num" value={calc.res}></NumberOutput>
      <Button className='plus' value='+' onClick={append}></Button>
      <Button className='minus' value='-' onClick={append}></Button>
      <Button className='one' value='1' onClick={append}></Button>
      <Button className='two' value='2' onClick={append}></Button>
      <Button className='three' value='3' onClick={append}></Button>
      <Button className='four' value='4' onClick={append}></Button>
      <Button className='five' value='5' onClick={append}></Button>
      <Button className='clear' value='C' onClick={clear}></Button>
      <Button className='mult' value='*' onClick={append}></Button>
      <Button className='div' value='/' onClick={append}></Button>
      <Button className='six' value='6' onClick={append}></Button>
      <Button className='seven' value='7' onClick={append}></Button>
      <Button className='eight' value='8' onClick={append}></Button>
      <Button className='nine' value='9' onClick={append}></Button>
      <Button className='zero' value='0' onClick={append}></Button>
      <Button className='equals' value='=' onClick={parse}></Button>
    </Wrapper>
  );

  /* 
  Notes:
    -It turns out that trying to allow for multi-operator equations is really a pain..
    -(2+2+2+2) is not that difficult if you are allowed to do it one operation at a time,
    but once you choose read in the whole line, the best solution is to convert the equation 
    into postfix notation and then solve it using a stack.
    -Bug: The parser is unable to handle (-1) but can handle (0-1).
  */
}

export default App;