import DiamSdk from 'diamante-sdk-js'

async function getAccountDetails(pair) {
    try {
        const server = new DiamSdk.Horizon.Server("https://diamtestnet.diamcircle.io/")

        const account = await server.loadAccount(pair.publicKey())
        // console.log("Balances for account: " + pair.publicKey())
        account.balances.forEach(balance => {
            // console.log("Type: ", balance.asset_type, ", Balance: ", balance.balance)
        });
        return account
    } catch (error) {
        console.log("ERROR: ", error)
        return null
    }
}

export default getAccountDetails