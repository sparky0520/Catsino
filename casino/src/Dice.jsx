import { useState } from "react"
import Navbar from "./Navbar.jsx"

export default function Dice() {

    function rollDice() {
            const result = Math.floor(Math.random() * 6 + 1)
            const resultPart = document.getElementById("Dice-Roll-Content")
            const winLose = document.getElementById("Dice-Roll-Content-1")
            resultPart.textContent = result
            if(result == value){
                winLose.textContent = "You Won !"
            }else{
                winLose.textContent = "You Lose.\nBetter luck next time..."
            }
    }

    const [value,setValue] = useState('Place your bet')

    return (
        <div className="Dice-Main">
            <Navbar />
            <div className="Dice-Roll">
                <div>
                    <h1 className="Dice-Roll-Heading">DICE</h1>
                    <div id="Dice-Roll-Content" className="Dice-Roll-Content">Place a bet between 1 and 6</div>
                    <br></br>
                    <div className="Dice-Roll-Content-1" id="Dice-Roll-Content-1">
                        <b>Roll Under</b>
                    </div>
                    {/* <div className="Dice-Slider"></div> */}
                    <input className="Dice-Footer-Button-1" type="text" value={value} onChange={val => {setValue(val)}}></input>
                    <button className="Dice-Footer-Button-2" onClick={rollDice}><b>ROLL</b></button>
                </div>
            </div>
        </div>
    )
}