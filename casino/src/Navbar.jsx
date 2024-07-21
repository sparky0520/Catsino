import { Link } from "react-router-dom"

export default function Navbar() {

    function connectWallet() {
        if (window.diam) {
            console.log("Diam extension is installed!");
        }

        window.diam
            .connect()
            .then((result) =>
                console.log(`User active public key is: ${result.message[0]}`)
            )
            .catch((error) => console.error(`Error: ${error}`));

        window.diam
            .sign(
                "AAAAAgAAAADD9u0l8B7fMgvRITQuplXFfTskVrNgTgyBN1heDfkLEAAAAGQApCseAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAADId5UakWjIgj3XsdYXl/8mJKTpUSUIu8F3IcB7cKoQ1wAAAAAAAAAAAExLQAAAAAAAAAAA",
                true,
                "Diamante Testnet"
            )
            .then((res) => console.log(res)); 
    }

    return (
        <div style={ {borderBottom: '1px solid white'}}>
            <span className="Navbar">
                <Link to={'/'}><img className="logo" width="50px" src="src/assets/logo.png"></img></Link>
                <button className="JackpotDetails"><b>0 DIAM</b></button>
                <button className="Token"><img className="Solana-Image" src="src/assets/logo-solana.png"></img><b>0 DIAM</b></button>
                <button className="Connect" onClick={connectWallet}>CONNECT</button>
            </span>
        </div>

    )
}