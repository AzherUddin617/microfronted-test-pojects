import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer";
import Header from "./components/header";

import Cookies from 'universal-cookie';

import "./index.scss";

import { calc } from 'about/utils';

import { StoreProvider, useStore } from 'store/store';

const App = () => {
  const { count, increment, decrement } = useStore();

  useEffect(()=> {
    const cookie = new Cookies();

    // cookie.addChangeListener(({name, value, options})=> {
    //   console.log(value);
    // })

    const interval = setInterval(()=> {
      const newCount = cookie.get('count');

      if (count < newCount) increment();
      else if (count > newCount) decrement();

    }, 1000);

    return ()=>{
      clearInterval(interval);
    }
  }, [count]);

  const handleCountChange = (newCount: number) => {
    const cookie = new Cookies();

    cookie.set('count', newCount.toString(), {
      domain: 'localhost'
    })

    if (count < newCount) {
      increment();
    } else {
      decrement();
    }
  }
  
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header no={1} />
      <div>Name: home</div>
      <div className="text-red-600">Count: {count}</div>
      <button className="bg-yellow-400" onClick={()=> handleCountChange(count+1)}>Increment</button>
      <br />
      <button className="bg-green-500" onClick={()=>handleCountChange(count-1)}>Decrement</button>
      <div>Calc: 3 + 4 = {calc(3,4)}</div>
      <Footer />
      <p className="text-xs">#issue - two way changing: changing quickly...</p>
    </div>
  );
} 
ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById("app"));