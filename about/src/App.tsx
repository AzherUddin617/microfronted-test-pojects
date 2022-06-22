import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Cookies from 'universal-cookie';

import "./index.scss";

import Header from 'home/Header';
import Footer from 'home/Footer';

import { StoreProvider, useStore } from 'store/store';

const App = () => {
  const { count, increment, decrement } = useStore();

  useEffect(()=> {
    const cookie = new Cookies();

    cookie.set('count', count, {
      path: '/',
      domain: 'http://localhost:5000'
    });
    console.log(cookie.get('count'))

  }, [count]);
  
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header no={2} />
      <div>Name: About</div>
      <div>Count: {count}</div>
      <button className="bg-green-500" onClick={increment}>Increment</button>
      <br/>
      <button className="bg-red-500" onClick={decrement}>Decrement</button>
      <Footer />
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById("app"));
