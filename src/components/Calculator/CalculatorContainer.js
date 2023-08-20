import React from "react"
import { Div, Mul, Sub, Sum } from "./Calc.js"


let CalculatorContainer= ()=> {
    return (
        <>

            <br/>
            <br/>
            <br/>
            <br/>
            <hr/>
            <br/>
            <br/>
            <br/>
        <u>Second react Code block</u>
            <br/>
        <div className="calculator">
            <p>Code for calculating two numbers: here n1=14, n2=5</p>
            <ul>
                <li>sumation of two num is {Sum(14, 5)}</li>
                <li>subtraction of two num is {Sub(14, 5)}</li>
                <li>multiplication of two num is {Mul(14, 5)}</li>
                <li>division of two num is {Div(14, 5)}</li>
            </ul>

        </div>
</>
    )
}
 export default CalculatorContainer