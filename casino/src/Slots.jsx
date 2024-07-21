import Navbar from "./Navbar.jsx";
export default function Slots(){
    function spinslots(){
        var a=Math.floor(Math.random() * 3 + 1);
        var b=Math.floor(Math.random() * 3 + 1);
        var c=Math.floor(Math.random() * 3 + 1);
        if(a==b && b==c && a==c){
            return(document.getElementById("SpinMe-Button").textContent="WIN!");
        }
        else{
            return(document.getElementById("SpinMe-Button").textContent="LOST!");
        }
    }
    return(
        <div className="Slots-Main">
            <Navbar/>
            <div className="Slots-Spin">
                <h1 align="center" className="Slots-Heading">SLOTS</h1>
                <div align="center" className="Slots-0-5x">0.5X</div>
                <div align="center" className="Slots-1x">1X</div>
                <div align="center" className="Slots-2x">2X</div>
                <div align="center" className="Slots-3x">3X</div>
                <div align="center" className="Slots-5x">5X</div>
                <div align="center" className="Slots-7x">7X</div>
                <div className="Unicorn-Div-1"><img width="90px" height="180px"src="src/assets/unicorn.png"></img></div>
                <div className="Unicorn-Div-2"><img width="90px" height="180px"src="src/assets/unicorn.png"></img></div>
                <div className="Unicorn-Div-3"><img width="90px" height="180px"src="src/assets/unicorn.png"></img></div>
                <div align="center" id="SpinMe-Button" className="SpinMe-Button">Spin Me!</div>
                <button className="Slots-Footer-Button-1"><img align="left" className="Slots-Footer-Button-1-Image"src="/src/assets/logo-solana.png"></img></button>
                <button className="Slots-Footer-Button-2" onClick={spinslots}><b>SPIN</b></button>
            </div>
        </div>
    )
}