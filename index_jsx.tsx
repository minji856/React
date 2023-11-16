/* 
  <h1>Create Element 실습</h1>
  <h2>안녕하세요... 처음 배우고 있습니다.</h2>
*/

import * as React from 'react';
import {createRoot} from 'react-dom/client';

// ReactElement
/*
const h1Element = React.createElement('h1', {style:{color:"red"}}, 'Create Element 실습')
const h2Element = React.createElement('h2', {
  style:{color:'blue', fontWeight: 400}}, '안녕하세요... 처음 배우고 있습니다.')

const rootNode = document.getElementById('root');
const reactRoot = createRoot(rootNode!); // 절대로 null이 될 수 없다고 보증 서는 not! 연산자

const divElement = React.createElement("div", {onClick:()=>alert('처음 배웁니다.')}, h1Element, h2Element);
reactRoot.render(divElement);
*/

const h1Element = React.createElement('h1', null, 'Create Element 실습')
const h2Element = React.createElement('h2', null, '안녕하세요... 처음 배우고 있습니다.')
const divElement = React.createElement("div", {onClick:()=>alert('처음 배웁니다.')}, h1Element, h2Element);

// JSX
const jsxElement = (
  <>
    <div className="test" onClick={()=>alert("jsx")}>
    <h1 className="1">Create Element 실습(JSX)</h1>
    <h2>안녕하세요... 처음 배우고 있습니다.</h2>
    </div>
    <h1>
      Hello~~
    </h1>
  </>
);

const rootNode = document.getElementById('root');
const reactRoot = createRoot(rootNode!);

reactRoot.render(jsxElement);