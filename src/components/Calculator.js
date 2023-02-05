
import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

function Calculator() {

    //examples useState
    const [age, setAge] = useState(28);
    const [name, setName] = useState('Taylor');

    const [input, setInput] = useState("");
    const calBtns = [];
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
        calBtns.push(
            <button
                onClick={(e) => {
                    setInput(input + e.target.value);
                }}
                value={item}
                key={item}
            >
                {" "}
                {item}
            </button>
        );
    });

    return (
        <div className="wrapper">
            {" "}
            <div className="show-input">{input}</div>
            <div className="digits flex">{calBtns}</div>
            <div className="modifiers subgrid">
                {/* clear button */}

                <button onClick={() => setInput(input.substr(0, input.length - 1))}>
                    Clear
                </button>

                {/* clear all */}
                <button onClick={() => setInput("")} value="">
                    AC
                </button>
            </div>
            <div className="operations subgrid">
                {/* add button */}
                <button onClick={(e) => setInput(input + e.target.value)} value="+">
                    +
                </button>

                {/* minus btn */}
                <button onClick={(e) => setInput(input + e.target.value)} value="-">
                    {" "}
                    -{" "}
                </button>

                <button onClick={(e) => setInput(input + e.target.value)} value="*">
                    {" "}
                    *
                </button>

                <button onClick={(e) => setInput(input + e.target.value)} value="/">
                    {" "}
                    /
                </button>
                {/* "=" btn */}
                <button
                    onClick={(e) => {
                        try {
                            setInput(
                                String(eval(input)).length > 3 &&
                                    String(eval(input)).includes(".")
                                    ? String(eval(input).toFixed(4))
                                    : String(eval(input))
                            );
                        } catch (e) {
                            console.log(e);
                        }
                    }}
                    value="="
                >
                    =
                </button>
            </div>
        </div>
    );
}

export default Calculator;




