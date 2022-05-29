import React from 'react';
import ReactDOM from 'react-dom/client';
import UltimateBarrage from "./UltimateBarrage";
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <section className="wrapper">
      <UltimateBarrage>

        “hello world”
        <p>dfadf</p>
        <p>dfadf</p>
        <p>dfadf</p>
        <p>dfadf</p>
        <img src={require('./static/avatar.jpg')} alt=""/>

      </UltimateBarrage>
    </section>
  </React.StrictMode>
);
