import React, { useCallback, useEffect, useRef, useState } from 'react';
import './TicTacToe.css';
import '../index.css';
import o_icon from '../assets/circle.png';
import x_icon from '../assets/cross.png';

const TicTacToe = () => {
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const titleRef = useRef(null);

    const toggle = (e, num) => {
        if (lock || data[num] !== "") {
            return;
        }

        const newData = [...data];
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${x_icon}'>`;
            newData[num] = "x";
            titleRef.current.innerHTML = `It's <img src='${o_icon}'> turn`;
        } else {
            e.target.innerHTML = `<img src='${o_icon}'>`;
            newData[num] = "o";
            titleRef.current.innerHTML = `It's <img src='${x_icon}'> turn`;
        }

        setData(newData);
        setCount(count + 1);
        checkWin(); // Check for a winner or tie after updating state
    };

    const checkWin = useCallback(() => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                won(data[a]);
                return;
            }
        }

        if (count === 9) {
            titleRef.current.innerHTML = "It's a tie!";
            setLock(true);
        }
    }, [data, count]);

    const won = (winner) => {
        setLock(true);
        if (winner === "x") {
            titleRef.current.innerHTML = `Congratulations: <img src='${x_icon}'>`;
        } else {
            titleRef.current.innerHTML = `Congratulations: <img src='${o_icon}'>`;
        }
    };

    const Reset = () => {
        setLock(false);
        setData(["", "", "", "", "", "", "", "", ""]);
        setCount(0);
        titleRef.current.innerHTML = `Tic Tac Toe Game with <span>Ahmed Nady</span>`;
        const boxes = document.querySelectorAll('.boxes');
        boxes.forEach(box => {
            box.innerHTML = "";
        });
    };

    useEffect(() => {
        checkWin();
    }, [checkWin]); // Added checkWin to the dependency array

    return (
        <>
            <div className="cont text-center items-center justify-center font-jersey">
                <h1 ref={titleRef} className='title m-5 text-white mt-[50px] text-[50px] flex justify-center items-center'>Tic Tac Toe Game with <span className='text-[#26ffcb]'>Ahmed Nady</span></h1>

                <div className="board flex flex-col items-center justify-center mb-5">
                    <div className="row1 flex ">
                        <div onClick={(e) => { toggle(e, 0) }} className="flex items-center justify-center cursor-pointer boxes h-[150px] w-[150px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] "></div>
                        <div onClick={(e) => { toggle(e, 1) }} className="flex items-center justify-center cursor-pointer boxes h-[150px] w-[150px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] "></div>
                        <div onClick={(e) => { toggle(e, 2) }} className="flex items-center justify-center cursor-pointer boxes h-[150px] w-[150px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] "></div>
                    </div>
                    <div className="row2 flex ">
                        <div onClick={(e) => { toggle(e, 3) }} className="flex items-center justify-center cursor-pointer boxes h-[150px] w-[150px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] "></div>
                        <div onClick={(e) => { toggle(e, 4) }} className="flex items-center justify-center cursor-pointer boxes h-[150px] w-[150px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] "></div>
                        <div onClick={(e) => { toggle(e, 5) }} className="flex items-center justify-center cursor-pointer boxes h-[150px] w-[150px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] "></div>
                    </div>
                    <div className="row3 flex ">
                        <div onClick={(e) => { toggle(e, 6) }} className="flex items-center justify-center cursor-pointer boxes h-[150px] w-[150px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] "></div>
                        <div onClick={(e) => { toggle(e, 7) }} className="flex items-center justify-center cursor-pointer boxes h-[150px] w-[150px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] "></div>
                        <div onClick={(e) => { toggle(e, 8) }} className="flex items-center justify-center cursor-pointer boxes h-[150px] w-[150px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] "></div>
                    </div>
                </div>
                <button
                    className="middle none center rounded-lg bg-[#26ffcb] py-3 px-6 font-sans text-xs font-bold uppercase text-[#0f1b21] shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                    onClick={() => { Reset() }}
                >
                    Reset
                </button>
                <a href="https://github.com/Ahmed-Nadyy" target='plank'>
                    <button
                        className="middle none center rounded-lg bg-[#26ffcb] py-3 px-6 font-sans text-xs font-bold uppercase text-[#0f1b21] shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mx-3"
                        data-ripple-light="true"
                    >
                        My GitHub
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/ahmed-nady-742a18240/" target='plank'>
                    <button
                        className="middle none center rounded-lg bg-[#26ffcb] py-3 px-6 font-sans text-xs font-bold uppercase text-[#0f1b21] shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                    >
                        My LinkedIn
                    </button>
                </a>
            </div>
        </>
    );
};

export default TicTacToe;
