import React from 'react';
import './App.css';

const source = "(+ 23 59 10)";
/**
 * "(+ 23 59 381)" => [Token{LPAREN}, Token{Operator: +}, Token{Number: 23}, Token{Number: 59}, Token{Number: 10}, Token{RPAREN}]
 */

// tokenizer-----------------
enum TokenType {
PAREN = "Paren",
Operator = "Operator",
Number = "Number",
};

type Paren = "(" | ")";

type ParenToken = {
type: TokenType.PAREN
val: Paren,
};

type NumberToken = {
type: TokenType.Number,
val: number,
};

type Operator = "+" | "*" | "-" | "/";

type OperatorToken = {
type: TokenType.Operator,
val: Operator,
};


type Token =  ParenToken | NumberToken | OperatorToken;

// 空文字判定をする
function isSpace(c: string): boolean {
return /\s/.test(c);
}
// 数字の判定をする
function isNumber(c: string): boolean {
if (isSpace(c)) return false;
return !isNaN(Number(c));
}

function createParen(pr: Paren): ParenToken {
return {type: TokenType.PAREN, val: pr}
}

function createOperator(op: Operator): OperatorToken {
return {type: TokenType.Operator, val: op};
}

function createNumber(num: number): NumberToken {
return {type: TokenType.Number, val: num};
}

function tokenize(source: string): Array<Token> {
let i = 0;
let c = '';
let buf = '';

const tokens: Array<Token> = [];
// sourceの文字列の長さよりもiが小さい時、取得したsourceの文字の一つ先の文字を返す
// そうじゃないときは''空文字を返す
const peek: () => string = () => i < source.length ? source[i] : '';

for (i = 0; i < source.length; i++) {
    // cはsource文字列の何文字目かになる
    c = source[i];

    // 空文字の場合skipする
    if (isSpace(c)) {
    continue;
    }
    // Parenの判定
    if (c === "(" || c === ")") {
    tokens.push(createParen(c));
    continue;
    }
    // Operatorの判定
    if ( c === "+" || c === "*" || c === "-" || c === "/" ) {
    tokens.push(createOperator(c));
    }
    // Numberの判定
    if (isNumber(c)) {
    // cがNumberなら
    do {
        // bufにcを
        buf += c;
        // 何文字目か + 1になる
        i++;
        // peek関数を呼んでいるので、次の文字を見ている
        c = peek();
    } while(isNumber(c))
        i--;
        tokens.push(createNumber(Number(buf)));
        buf = '';
        continue;
    }
}
return tokens;
}

const tokens = tokenize(source);
console.log(tokens);
// tokenizer-----------------

export { tokenize }
