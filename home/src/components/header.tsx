import React from "react";

import { useStore } from 'store/store';

const Header = ({ no }: { no: number }) => {
    const { count, increment, incrementByAmount } = useStore();

    return <div className="bg-red-600">Header {no} count: {count} <button className="rounded text-black bg-white" onClick={increment}>+</button></div>;
};

export default Header;
