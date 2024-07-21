import { Link } from "react-router-dom"

export default function Games() {
    return(
        <div>
            <img src="src/assets/gambling_cat.png" className="gambling_image"/>
            <img src="src/assets/cat_right.png" className="right_cat_image"/>
            <h1 align="center" className="Games-Heading">GAMES</h1>
            <Link to={'/dice'}><button className="Dice"><img width="250px" src="games/dice.png"></img></button></Link>
            <Link to={'/slots'}><button className="Slots"><img width="250px" src="games/slots.png"></img></button></Link>
            <Link to={'/flip'}><button className="Flip"><img width="250px" src="games/flip.png"></img></button></Link>
            <button className="Hilo"><img width="250px" src="games/hilo.png"></img></button>
            <button className="Mines"><img width="250px" src="games/mines.png"></img></button>
            <button className="Roulette"><img width="250px" src="games/roulette.png"></img></button>
            <button className="Plinko"><img width="250px" src="games/plinko.png"></img></button>
            <button className="Crash"><img width="250px" src="games/crash.png"></img></button>
            <button className="Limbo"><img width="250px" src="games/limbo.png"></img></button>
            <button className="Keno"><img width="250px" src="games/keno.png"></img></button>
        </div>
    )
}
