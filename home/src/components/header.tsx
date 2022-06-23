import React from "react";

import { useStore } from 'store/store';

const Header = ({ no }: { no: number }) => {
    const { count, increment, incrementByAmount } = useStore();

    return (
        <header className="bg-red-600">
            Header {no} {" "}
            <span className="text-yellow-300">count: {count}</span> 
            <button className="rounded text-black bg-white" onClick={increment}>+</button>
        </header>
    )
    // return <div className="bg-red-600">Header {no}</div>;
};

export default Header;
