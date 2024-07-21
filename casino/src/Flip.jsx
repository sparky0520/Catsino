import Navbar from "./Navbar.jsx"
export default function Flip() {
    function flipcoin() {
        const a = Math.floor(Math.random() * 2)+1;
        if (a == 2) {
            return(document.getElementById("Flip-To-Win").textContent = "Congratulations!");
        }
        else {
            return(document.getElementById("Flip-To-Win").textContent = "Sorry!");
        }
    }
    return (
        <div>
            <Navbar />
            <div className="Flip-Start">
                <div className="Flip-Heading" align="center">
                    <h1>FLIP</h1>
                    <div id="Flip-To-Win" className="Flip-To-Win">
                        Flip To Win!
                    </div>
                    <br></br>
                    <div className="Heads-Bg">
                        <img className="Heads-Img" width="140px" src="src/assets/heads.png"></img>
                    </div>
                    <div className="Heads-Div">
                        Heads
                    </div>
                    <button className="Flip-Footer-Button-1"><img align="left" className="Flip-Footer-Button-1-Image" src="/src/assets/logo-solana.png"></img></button>
                    <button className="Flip-Footer-Button-2" onClick={flipcoin}><b>FLIP</b></button>
                </div>
            </div>
        </div>
    )
}