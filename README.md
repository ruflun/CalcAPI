# CalcAPI - A really simple calculator RESTful API

## Introduction

CalcAPI is simply a calculator API I made to learn NodeJS & the Express API module, so I can learn how to make APIs & properly use NodeJS in the future.

Really, it's so simple it's practically useless in real use cases.

Anyways, all API endpoints uses the `GET` method and excepts two arguments: `a` and `b`, both which must be numbers.

By default, the app listens to the port **3000**, but you can always change that in the code (first few lines, in the port constant).

To run the server, do either of the following (on the project root):
- Directly run the server on the TS file via the `ts-node` package/command.
- Run `tsc` to compile the typescript, then run `node ./dist/index.js`.

## Endpoints/Commands

`/api/add` - Adds A by B.

`/api/sub` - Substracts A by B.

`/api/mul` - Multiplies A by B.

`/api/div` - Divides A by B.

`/api/pow` - Returns the product of A by B (A^B).

`/api/sqrt` - Returns the square root of A. (B isn't used here)

`/api/min` - Returns the smallest number between A and B.

`/api/max` - Returns the largest number between A and B.

## API status codes

`200 (OK)` - The operation succeeded, and it should return the resulting number.

`418 (I'm a teapot)` - The operation failed, because you tried to do a stupid operation (like dividing by zero, or trying to pass non-numbers as arguments).

`500 (Internal server error)` - Self-explanatory (the server has an error, and it shouldn't be your fault in most cases).

## Examples

`http://localhost:3000/api/add?a=1&b=2` => **3**

`http://localhost:3000/api/sub?b=4&a=5` => **1**

`http://localhost:3000/api/sqrt?a=9&b=67` => **3**

`http://localhost:3000/api/div?a=5&b=0` => **NaN**