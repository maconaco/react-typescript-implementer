import React from 'react';
import logo from './logo.svg';
import './App.css';

import { tokenize } from "./Tokenizer";
 // LeftParenが検出されたら計算開始
 // RightParenが検出されたら計算終了
 // + || * || - || / が来たらOperatorとする
 // NumberはOperatorで計算される

const source = "(+ 23 59 10)";
/**
 * "(+ 23 59 10)" => [Token{LPAREN}, Token{Operator: +}, Token{Number: 23}, Token{Number: 59}, Token{Number: 10}, Token{RPAREN}]
 */

const tokens = tokenize(source);
console.log(tokens);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo mt-24" alt="logo" />
        <p className="text-blue-900">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link text-blue-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App
