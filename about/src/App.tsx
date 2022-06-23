import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Cookies from 'universal-cookie';

import "./index.scss";

import Header from 'home/Header';
import Footer from 'home/Footer';

import { StoreProvider, useStore } from 'store/store';


const App = () => {
  const { count, increment, decrement, incrementByAmount } = useStore();
  
  useEffect(()=> {
    const cookie = new Cookies();
    // cookie.addChangeListener(({name, value})=> {
    //   console.log(name, value, ":about");
    // })

    const interval = setInterval(()=> {
      const newCount = cookie.get('count');

      if (count < newCount) increment();
      else if (count > newCount) decrement();

    }, 1000);

    return ()=>{
      clearInterval(interval);
    }
  }, [count])

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
      <Header no={2} />
      <div>Name: About</div>
      <div className="text-red-600">Count: {count}</div>
      <button className="bg-green-500" onClick={()=> handleCountChange(count+1)}>Increment</button>
      <br/>
      <button className="bg-red-500" onClick={()=> handleCountChange(count-1)}>Decrement</button>
      <Footer />
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById("app"));