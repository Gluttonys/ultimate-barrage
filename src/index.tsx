import React from 'react';
import ReactDOM from 'react-dom/client';
import UltimateBarrage from "./UltimateBarrage";
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>

    <UltimateBarrage className="wrapper">
      “hello world”
      <i>dfadf</i>
      <p>dhfadhf 🚀🚀🚀🚀</p>
      <section>
        <img src={require('./static/avatar.jpg')} alt=""/>
        <small>这是一个带有图片的弹幕</small>
      </section>
      <big>dfadf</big>
      <strong>dfadf</strong>
      <em>dfadf</em>

    </UltimateBarrage>

  </React.StrictMode>
);
