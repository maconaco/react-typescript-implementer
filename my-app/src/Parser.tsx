import React from 'react';
import './App.css';

/**
expr := '(' fn expr... ')' | number
fn := '+' | '-' | '*' | '/'
number := [0-9] | [1-9][0-9]
**/

enum NodeType {
  Number,
  Expression,
};

type NumberNode = {
  type: NodeType.Number,
  val: number,
};

type ExpressionNOde = {
    type: NodeType.Expression,
    val: string,
};

/* 例外処理
const parseException = {
  try {
    throw 'Something bad happened';
  }
  catch(e) {
    console.log(e);
  }
}
*/
