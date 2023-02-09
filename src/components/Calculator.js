
import React, { Component, useState } from "react";
import CalculatorTitle from "./CalculatorTitle";

function Calculator() {

    //Hook useState. to Show everything pressed. Maybe add some validations. Cambiar estilos ? css ?
    //usar otros hooks ? usar este como exp pero tiene que ser un ticket como realista
    //simple modification for git
    const [input, setInput] = useState("");
    const calBtns = [];

    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
        calBtns.push(
            <button
                onClick={(e) => {
                    setInput(input + e.target.value);
                    console.log("Valor input", input);
                }}
                value={item}
                key={item}
            >
                {" "}
                {item}
            </button>
        );
    });


    function undo() {
        setInput(input.substr(0, input.length - 1))
    }

    function clearInput() {
        setInput("");
    }

    /*This is another option instead of anonymus method */
    function plus (e) {
        setInput(input + e.target.value)
    }

    function abstr (e) {
        setInput(input - e.target.value)
    }

    return (
        <><CalculatorTitle></CalculatorTitle><div className="wrapper">
            {" "}
            <div className="show-input">{input}</div>
            <div className="digits flex">{calBtns}</div>
            <div className="modifiers subgrid">
                <button onClick={undo}>Undo</button>
                <button onClick={clearInput} value="">Clear</button>
            </div>
            <div className="operations subgrid">
                <button onClick={plus} value="+">+</button>
                <button onClick={(e) => setInput(input + e.target.value)} value="-">{" "}-{" "}</button>
                <button onClick={(e) => setInput(input + e.target.value)} value="*">{" "}*</button>
                <button onClick={(e) => setInput(input + e.target.value)} value="/">{" "}/</button>
                <button onClick={(e) => {
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
                } }
                    value="="
                >=</button>
            </div>
        </div></>
    );
}

export default Calculator;




