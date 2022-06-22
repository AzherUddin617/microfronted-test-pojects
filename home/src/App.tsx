import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer";
import Header from "./components/header";

import Cookies from 'universal-cookie';

import "./index.scss";

import { calc } from 'about/utils';

import { StoreProvider, useStore } from 'store/store';

const App = () => {
  const { count, increment, incrementByAmount } = useStore();

  useEffect(()=> {
    const cookie = new Cookies();
    console.log(cookie.get('count'));
  }, [count])
  
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header no={1} />
      <div>Name: home</div>
      <div>Count: {count}</div>
      <button className="bg-yellow-400" onClick={increment}>Increment</button>
      <br />
      <button className="bg-green-500" onClick={()=>incrementByAmount(33)}>Increment 33</button>
      <div>Calc: 3 + 4 = {calc(3,4)}</div>
      <Footer />
    </div>
  );
} 
ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById("app"));
// ReactDOM.render(<App />, document.getElementById("app"));
